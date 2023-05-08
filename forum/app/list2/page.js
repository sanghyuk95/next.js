import {connectDB} from "@/utill/database";
import ListItem from "./listitem";

export const dynamic = "force-dynamic";
export const revalidata = 20;

export default async function List() {
  const client = await connectDB;
  const db = client.db("forun");
  let result = await db.collection("post").find().toArray();
  return (
    <div className="list-bg">
      <ListItem result={JSON.stringify(result)} />
    </div>
  );
}
