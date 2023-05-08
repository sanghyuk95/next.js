"use client";

import {useRouter} from "next/navigation";

export default function DetailLink() {
  let router = useRouter();
  //usePathname() 현재URL출력
  //useSearchParams() 쿼리스트링 출력
  //useParams() 다이나믹 라우터에 입력한거 출력
  return (
    <button
      onClick={() => {
        router.push("/");
        //링크보다 기능많음
        //back-뒤로가기/forward - 앞으로가기 / refresh - 바뀐내용만 새로고침
        //prefetch-페이지 미리로드(링크태그에 기본탑재) 개발중일땐 확인불가
      }}
    >
      버튼
    </button>
  );
}
