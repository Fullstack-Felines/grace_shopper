import React from "react";

export default function Contact() {
  return (
    <div>
      <section class="contact container" id="contact">
        <h2 class="heading">Contact Us!</h2>
        <form action="" class="contact-form" id="contact-form">
          <input type="text" placeholder="Your Name" class="name" required />
          <input
            type="email"
            name=""
            id=""
            placeholder="Email Address"
            class="email"
            required
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Write message here"
            class="message"
            required
          ></textarea>
          <input type="submit" value="Submit" class="send-btn" />
        </form>
      </section>
    </div>
  );
}
