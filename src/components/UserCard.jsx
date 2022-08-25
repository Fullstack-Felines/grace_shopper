import React from "react";

export default function UserCard(input) {
  const user = input.user;
  return (
    <div class="grid grid-cols-2">
      <div class="bg-cardpaper rounded-lg">
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
    </div>
  );
}
