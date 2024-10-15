import { connectDB } from "@/utils/db/database";

export const handler = async (req: Request, res: Response) => {
  if (req.method === "POST") {
    const body = await req.json();
    const db = (await connectDB())?.db("musicany");
    await db.collection("user_cred").insertOne(body);
  }
};
