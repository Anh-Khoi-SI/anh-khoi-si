import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import BlogCategory from "@/models/BlogCategory";
import slugify from "slugify";

export async function GET() {
  try {
    await dbConnect();

    // Lấy tất cả danh mục
    const categories = await BlogCategory.find({}).lean();

    const categoryMap = {};
    categories.forEach((cat) => {
      categoryMap[cat.slug] = {
        key: cat.slug,
        label: cat.title,
        children: null,
      };
    });

    // Gán children vào danh mục cha
    const finalCategories = [];
    categories.forEach((cat) => {
      if (cat.parent && categoryMap[cat.parent]) {
        if (!categoryMap[cat.parent].children) {
          categoryMap[cat.parent].children = [];
        }
        categoryMap[cat.parent].children.push(categoryMap[cat.slug]);
      } else {
        finalCategories.push(categoryMap[cat.slug]);
      }
    });

    // Loại bỏ `children: null` để không hiển thị trong kết quả JSON
    const cleanCategories = finalCategories.map((cat) => {
      if (!cat.children) {
        const { children, ...rest } = cat;
        return rest;
      }
      return cat;
    });

    return NextResponse.json(cleanCategories, { status: 200 });
  } catch (error) {
    console.error("Lỗi khi lấy danh mục:", error);
    return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await dbConnect();
    const { title, parent } = await req.json();
    const slug = slugify(title, { lower: true, strict: true });

    // Kiểm tra trùng lặp slug
    const existingCategory = await BlogCategory.findOne({ slug });
    if (existingCategory) {
      return NextResponse.json(
        { error: "Danh mục đã tồn tại!" },
        { status: 400 }
      );
    }

    // Nếu có parent, kiểm tra xem parent có đang có children không
    if (parent) {
      const parentCategory = await BlogCategory.findOne({ slug: parent });

      if (!parentCategory) {
        return NextResponse.json(
          { error: "Danh mục cha không tồn tại!" },
          { status: 400 }
        );
      }

      // Nếu danh mục cha đã có parent, không cho phép thêm vào children (tức là chỉ cho phép 2 cấp danh mục)
      if (parentCategory.parent) {
        return NextResponse.json(
          { error: "Không thể thêm danh mục con vào một danh mục con khác!" },
          { status: 400 }
        );
      }
    }

    // Nếu không có parent, tức là danh mục gốc, đảm bảo nó không có children từ đầu
    const newCategory = new BlogCategory({
      title,
      slug,
      parent: parent || null,
    });
    await newCategory.save();

    return NextResponse.json(
      { message: "Danh mục đã được tạo!", category: newCategory },
      { status: 201 }
    );
  } catch (error) {
    console.error("Lỗi khi tạo danh mục:", error);
    return NextResponse.json({ error: "Lỗi server!" }, { status: 500 });
  }
}
