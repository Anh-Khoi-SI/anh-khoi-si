import dbConnect from "@/lib/dbConnect";
import Contact from "@/models/Contact";

// GET - Lấy chi tiết Contact theo ID
export async function GET(request, { params }) {
  await dbConnect();

  try {
    const contact = await Contact.findById(params.id);
    if (!contact) {
      return new Response(JSON.stringify({ error: "Contact not found" }), {
        status: 404,
      });
    }
    return new Response(JSON.stringify(contact), { status: 200 });
  } catch (error) {
    console.error("Error fetching contact:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch contact" }), {
      status: 500,
    });
  }
}
