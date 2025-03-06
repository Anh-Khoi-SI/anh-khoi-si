import { NextResponse } from "next/server";
import Blog from "@/models/Blog";
import dbConnect from "@/lib/dbConnect";
import slugify from "slugify";

// 📌 GET: Lấy danh sách bài viết hoặc 1 bài viết theo slug/id
export async function GET(req) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);
    const slug = searchParams.get("slug");
    const id = searchParams.get("id");

    if (id) {
      const blog = await Blog.findById(id);

      if (!blog) {
        return NextResponse.json({ error: "Blog not found" }, { status: 404 });
      }

      return NextResponse.json(blog, { status: 200 });
    } else if (slug) {
      const blog = await Blog.findOne({ slug });

      if (!blog) {
        return NextResponse.json({ error: "Blog not found" }, { status: 404 });
      }

      return NextResponse.json(blog, { status: 200 });
    } else {
      // ✅ Nếu không có slug hoặc id, trả về tất cả bài viết
      const blogs = await Blog.find();
      return NextResponse.json(blogs, { status: 200 });
    }
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// 📌 POST: Thêm bài viết mới
export async function POST(req) {
  try {
    await dbConnect();
    const { title, subTitle, banner, content, categorySlug } = await req.json();

    if (!title || !subTitle || !banner || !content || !categorySlug) {
      return NextResponse.json(
        { error: "Vui Lòng Điền Đầy Đủ Thông Tin" },
        { status: 400 }
      );
    }

    const slug = slugify(title, { lower: true, strict: true });

    const newBlog = new Blog({
      title,
      slug,
      subTitle,
      banner,
      content,
      categorySlug,
    });

    await newBlog.save();

    return NextResponse.json(
      { message: "Blog saved successfully!", data: newBlog },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving blog:", error);
    return NextResponse.json({ error: "Failed to save blog" }, { status: 500 });
  }
}

// 📌 DELETE: Xóa Bài Viết
export async function DELETE(req) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "ID bài viết không hợp lệ" },
        { status: 400 }
      );
    }

    // Tìm và xóa bài viết
    const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      return NextResponse.json(
        { error: "Bài viết không tìm thấy" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Bài viết đã được xóa thành công!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
