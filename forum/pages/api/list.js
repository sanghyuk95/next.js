import { connectDB } from '@/utill/database';

export default async function list(req, res) {
  const client = await connectDB;
  const db = client.db("forun");
  let result = await db.collection("post").find().toArray();
  if (req.method === "GET") {
    return res.status(200).json(result);
  }
}
