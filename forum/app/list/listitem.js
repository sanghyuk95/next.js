"use client";

import Link from "next/link";

export default function ListItem(props) {
  let result = JSON.parse(props.result);
  return (
    <div>
      {result.map((a, i) => {
        return (
          <div className="list-item" key={i}>
            <Link href={`/detail/${result[i]._id}`}>
              <h1>{result[i].title}</h1>
            </Link>
            <Link href={`/edit/${result[i]._id}`}>✏️</Link>
            <span
              onClick={(e) => {
                fetch("/api/delete", {
                  method: "POST",
                  body: result[i]._id,
                })
                  .then((r) => {
                    return r.json();
                  })
                  .then(() => {
                    e.target.parentElement.style.opacity = 0;
                    setTimeout(() => {
                      e.target.parentElement.style.display = "none";
                    }, 1000);
                  })
                  .catch(() => {alert('정보불일치')});

                // -------------------------------------------------
                // fetch(`/api/test?id=${result[i]._id}`, {method: 'POST'});
              }}
            >
              🗑️
            </span>
            <p>1월1알 </p>
          </div>
        );
      })}
    </div>
  );
}
