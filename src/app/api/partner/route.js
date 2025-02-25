import dbConnect from "@/lib/dbConnect";
import Partner from "@/models/Partner";

export async function POST(req, res) {
  await dbConnect();
}
