import {connectDB} from "@/utill/database";
import {ObjectId} from "mongodb";
import {getServerSession} from "next-auth";
import {authOptions} from "./auth/[...nextauth]";

export default async function handler(req, res) {
  let session = await getServerSession(req, res, authOptions);
  if (req.method === "POST") {
    const client = await connectDB;
    const db = client.db("forun");
    let find = await db
      .collection("post")
      .findOne({ _id: new ObjectId(req.body) });
    if (session.user.email === find.author) {
      let result = await db
        .collection("post")
        .deleteOne({_id: new ObjectId(req.body)});
      console.log(result);
      return res.status(200).json("good");
    } else {
      return res.status(500).json("정보 불일치");
    }
  }
}
