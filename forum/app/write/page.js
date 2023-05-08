import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";

export default async function Write() {
  let session = await getServerSession(authOptions);
  console.log(session);
  if (!session) {
    return <h1>로그인 해주세요</h1>;
  }
  return (
    <div className="p-20">
      <h4>글작성</h4>
      <form action="/api/write" method="POST">
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="content" placeholder="content" />
        <button type="submit">글쓰기</button>
      </form>
    </div>
  );
}
