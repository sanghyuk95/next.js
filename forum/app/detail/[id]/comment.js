"use client";

import {useEffect, useState} from "react";

export default function Comment(props) {
  let [comment, setComment] = useState("");
  let [list, setList] = useState([]);

  useEffect(() => {
    // fetch("/api/comment/list", {
    //   method: "POST",
    //   body: props._id,
    // })
    fetch(`/api/comment/list?id=${props._id}`)
      .then((r) => r.json())
      .then((data) => {
        setList(data);
      });
  }, []);
  return (
    <div>
      {list.length > 0
        ? list.map((a, i) => {
            return <div key={i}>{a.content}</div>;
          })
        : "로딩중"}
      <input
        onChange={(e) => {
          setComment(e.target.value);
        }}
        value={comment}
        placeholder='댓글입력창'
      />
      <button
        onClick={() => {
          fetch("/api/comment/new", {
            method: "POST",
            body: JSON.stringify({comment: comment, _id: props._id}),
          })
            .then((r) => r.json())
            .then((data) => {
              setList(data);
              setComment('')
            });
        }}
      >
        댓글전송
      </button>
    </div>
  );
}
