import {connectDB} from "@/utill/database";
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === "POST") {
    if (req.body.title === "") {
      return res.status(500).json("왜 제목 안씀");
    }
    const client = await connectDB;
    const db = client.db("forun");
    let result = await db.collection("post").updateOne({_id:new ObjectId(req.body.id) }, {$set: {title:req.body.title,content:req.body.content}});
    return res.redirect(302, "/list");
  }
}
