import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <form className="contact-form" method="POST" netlify>
      <div className="inputBox">
          <input type="text" id="first-name" name="_first-name" required="">
          <label>First Name</label>
      </div>

      <div className="inputBox">
              <input type="text" id="last-name" name="_last-name" required="">
              <label>Last Name</label>
          </div>


      <div className="inputBox">
          <input type="text" className="email-input" id="email-address" name="_email-address" required="">
          <!-- <input type="email" className="email-input" id="email-address" name="_email-address" required=""> -->
          <label>Email</label>
      </div>


      <div className="inputBox">
          <textarea type="text" id="message" name="_message" style="height: 50px" required=""></textarea>
          <label>Message</label>
      </div>

      <div className="submit-button">
          <input type="submit" value="SUBMIT">
      </div>

  </form>
    )
  }
}

export default Contact;