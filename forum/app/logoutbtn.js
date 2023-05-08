"use client";

import {signOut} from "next-auth/react";

export default function Logoutbtn() {
  return (
    <button
      onClick={() => {
        signOut();
      }}
    >
      Logout
    </button>
  );
}
