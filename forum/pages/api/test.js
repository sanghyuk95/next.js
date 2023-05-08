import {connectDB} from "@/utill/database";
import {ObjectId} from "mongodb";

export default async function handler(req, res) {
  console.log(req.query);
  if (req.method === "POST") {
    const client = await connectDB;
    const db = client.db("forun");
    let result = await db
      .collection("post")
      .deleteOne({ _id: new ObjectId(req.query) });
    console.log(result)
    res.status(200).json("good");
  }
}
