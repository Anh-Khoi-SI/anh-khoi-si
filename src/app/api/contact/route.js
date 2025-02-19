// app/api/contact/route.js

import connectDB from "@/lib/dbConnect"; // Đường dẫn đến file dbConnect.js
import Contact from "@/models/Contact"; // Đường dẫn đến model Contact

export async function POST(request) {
  await connectDB();

  const data = await request.json();

  try {
    const contact = new Contact(data);
    await contact.save();
    return new Response(
      JSON.stringify({ message: "Contact saved successfully!" }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving contact:", error);
    return new Response(JSON.stringify({ error: "Failed to save contact" }), {
      status: 500,
    });
  }
}
