import {connectDB} from "@/utill/database";
import {ObjectId} from "mongodb";
import {getServerSession} from "next-auth";
import {authOptions} from "../auth/[...nextauth]";

export default async function handler(req, res) {
  let session = await getServerSession(req, res, authOptions);
  if (!session) {
    return;
  }
  if (req.method === "POST") {
    req.body = JSON.parse(req.body);
    let save = {
      content: req.body.comment,
      parent: new ObjectId(req.body._id),
      author: session.user.email,
    };

    const client = await connectDB;
    const db = client.db("forun");
    let result = await db.collection("comment").insertOne(save);
    let list = await db
    .collection("comment")
    .find({ parent: new ObjectId(req.body._id) })
      .toArray();
    return res.status(200).json(list);
  }
}
