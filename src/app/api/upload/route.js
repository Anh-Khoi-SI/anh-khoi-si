import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return new Response(JSON.stringify({ error: "No file uploaded" }), {
        status: 400,
      });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload vào thư mục "partner"
    return new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ folder: "partner" }, (error, result) => {
          if (error) {
            reject(
              new Response(JSON.stringify({ error: "Upload failed" }), {
                status: 500,
              })
            );
          } else {
            resolve(
              new Response(
                JSON.stringify({
                  url: result.secure_url,
                  public_id: result.public_id,
                }),
                { status: 200 }
              )
            );
          }
        })
        .end(buffer);
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
