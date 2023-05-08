"use client";

import {useState} from "react";

//이미지 최적화
// import Image from "next/image";
// import img from '/public/food0.png'

export default function List() {
  let product = ["tomato", "pasta", "coconut"];
  let [good, setGood] = useState([0, 0, 0]);
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {product.map((a, i) => {
        return (
          <div className="food" key={i}>
            <img src={`/food${i}.png`} className="food-img"></img>
            <h4>{a} $40</h4>
            <span> {good[i]} </span>
            <button
              onClick={() => {
                let copy = [...good]
                copy[i]++
                setGood(copy);
              }}
            >
              ++++
            </button>
            <button
              onClick={() => {
                let copy = [...good]
                copy[i]--
                setGood(copy);
              }}
            >
              ----
            </button>
          </div>
        );
      })}
    </div>
  );
}
