import {connectDB} from "@/utill/database";
import {authOptions} from "./auth/[...nextauth]";
import {getServerSession} from "next-auth";

export default async function handler(req, res) {
  let session = await getServerSession(req, res, authOptions);
  if (session) {
    req.body.author = session.user.email
  }
  if (req.method === "POST") {
    console.log(req.body);
    if (req.body.title === "") {
      return res.status(500).json("왜 제목 안씀");
    }
    const client = await connectDB;
    const db = client.db("forun");
    let result = await db.collection("post").insertOne(req.body);
    return res.redirect(302, "/list");
  }
}
