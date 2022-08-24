import React from "react";

export default function UserCard(input) {
  const user = input.user;
  return (
    <div>
      <p>
        <b>Name:</b> {user.name}
      </p>
      <p>
        <b>Address:</b> {user.address}
      </p>
      <p>
        <b>Phone Number:</b> {user.phonenumber}
      </p>
      <p>
        <b>Username:</b> {user.username}
      </p>
      <p>
        <b>Email:</b> {user.email}
      </p>
    </div>
  );
}
