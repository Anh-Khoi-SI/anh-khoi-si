import dbConnect from "@/lib/dbConnect";
import Contact from "@/models/Contact";

// POST - Thêm mới Contact
export async function POST(request) {
  await dbConnect();

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

// GET - Lấy Tất Cả Contact
export async function GET() {
  await dbConnect();

  try {
    const contacts = await Contact.find({});
    return new Response(JSON.stringify(contacts), { status: 200 });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch contacts" }), {
      status: 500,
    });
  }
}

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

// DELETE - Xoá Contact theo ID
export async function DELETE(request, { params }) {
  await dbConnect();

  try {
    const deletedContact = await Contact.findByIdAndDelete(params.id);
    if (!deletedContact) {
      return new Response(JSON.stringify({ error: "Contact not found" }), {
        status: 404,
      });
    }
    return new Response(
      JSON.stringify({ message: "Contact deleted successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting contact:", error);
    return new Response(JSON.stringify({ error: "Failed to delete contact" }), {
      status: 500,
    });
  }
}
