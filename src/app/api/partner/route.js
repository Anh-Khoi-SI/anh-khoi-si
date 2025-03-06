import dbConnect from "@/lib/dbConnect";
import Partner from "@/models/Partner";

export async function POST(req, res) {
  await dbConnect();

  const data = await request.json();

  try {
    const partner = new Partner(data);
    await partner.save();
    return new Response(
      JSON.stringify({ message: "Partner saved successfully!" }),
      { status: 201 }
    );
    e;
  } catch (error) {
    console.error("Error saving partner:", error);
    return new Response(JSON.stringify({ error: "Failed to save partner" }), {
      status: 500,
    });
  }
}
