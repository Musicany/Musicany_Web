import { redirect } from "next/navigation";
import { connectDB } from "@/utils/db/database";

const Home = async () => {
  const client = await connectDB();
  const db = client?.db("musicany");
  const result = await db?.collection("user_cred").find().toArray();
  console.log(result);
};

export default Home;
