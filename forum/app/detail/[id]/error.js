'use client'

export default function Error({error,reset}) {
  return (
    <div>
      <h1>에러남</h1>
      <button onClick={()=>{reset()}}>새로고침</button>
    </div>
  );
}
