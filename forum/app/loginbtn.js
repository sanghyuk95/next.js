"use client";

import {signIn} from "next-auth/react";

export default function Loginbtn() {
  return (
    <button
      onClick={() => {
        signIn();
      }}
    >
      Login
    </button>
  );
}
