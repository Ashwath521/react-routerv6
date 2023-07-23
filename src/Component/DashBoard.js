import React from "react";

export default function DashBoard({ user }) {
  return (
    <div>
      <h1>DashBoard Page</h1>
      <h4>Hello, {user?.name}</h4>
    </div>
  );
}
