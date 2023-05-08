import {connectDB} from "@/utill/database";
import {ObjectId} from "mongodb";

export default async function list(req, res) {
  const client = await connectDB;
  const db = client.db("forun");
  let result = await db
    .collection("comment")
    .find({ parent: new ObjectId(req.query.id) })
    .toArray();
  return res.status(200).json(result);
}
