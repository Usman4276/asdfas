import React from "react";
import { useUser } from "@auth0/nextjs-auth0";

export default function profile() {
  const { user } = useUser();

  let email;

  for (const key in user) {
    if (user.email_verified === true) {
      email = user.email;

      return (
        <>
          <div className="container">
            <h1>Successfully logged in ✅</h1>
            <h4>Email = {email}</h4>

            <a href="/">
              <button className="btn-profile">HomePage</button>
            </a>
            <a href="http://localhost:3000/api/auth/logout">
              <button className="btn-profile">Logout</button>
            </a>
          </div>
        </>
      );
    }
  }

  return (
    <>
      <div className="container">
        <h1>Not logged in ❌</h1>
        <a href="/">
          <button className="btn-profile">HomePage</button>
        </a>
      </div>
    </>
  );
}
