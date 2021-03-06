import React from "react";
import "./form.css";

const Form = () => {
  return (
    <div class="container">
      <form id="contact" action="" method="post">
        <h3>Test Form for node</h3>
        <h4>some qoute</h4>

        <input
          placeholder="Your name"
          type="text"
          tabindex="1"
          required
          autofocus
        />

        <input
          placeholder="Your Email Address"
          type="email"
          tabindex="2"
          required
        />

        <input
          placeholder="Your Phone Number (optional)"
          type="tel"
          tabindex="3"
          required
        />

        <input
          placeholder="Your Web Site (optional)"
          type="url"
          tabindex="4"
          required
        />

        <textarea placeholder="address" tabindex="5" required></textarea>

        <label for="img">Select image:</label>
        <input type="file" id="img" name="img" accept="image/*" />

        <button
          name="submit"
          type="submit"
          id="contact-submit"
          data-submit="...Sending"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default Form;
