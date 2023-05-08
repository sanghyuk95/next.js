import {connectDB} from "@/utill/database";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.password);
    if (
      req.body.name === "" ||
      req.body.email === "" ||
      req.body.password === ""
    ) {
      return res.status(500).json("빈칸없이 해주세요");
    }

    const client = await connectDB;
    const db = client.db("forun");

    let existEmail = await db
      .collection("user_cerd")
      .findOne({email: req.body.email});
    if (existEmail) {
      return res.status(500).json("이미 있는 이메일");
    }

    let hash = await bcrypt.hash(req.body.password, 10);
    req.body.password = hash;

    await db.collection("user_cerd").insertOne(req.body);
    res.status(200).json("가입완료");
  }
}
