import {connectDB} from "@/utill/database";
import {ObjectId} from "mongodb";

export default async function Edit(props) {
  const client = await connectDB;
  const db = client.db("forun");
  let result = await db
    .collection("post")
    .findOne({_id: new ObjectId(props.params.id)});
  return (
    <div className="p-20">
      <h4>수정페이지</h4>
      <form action="/api/edit" method="POST">
        <input name="title" defaultValue={result.title} />
        <input name="content" defaultValue={result.content} />
        <input
          style={{display: "none"}}
          name="id"
          defaultValue={result._id.toString()}
        />
        <button type="submit">글쓰기</button>
      </form>
    </div>
  );
}
