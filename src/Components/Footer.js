import React, { Component } from "react";
import history from "../history";

class Footer extends Component {
  redirect = () => {
    history.push("/register");
  };
  render() {
    return (
      <footer className="footer-container">
      <ul className="footer-list">
        <li>
          <a onClick={this.redirect}> About Ask Izzy Plus </a>
        </li>
        <li>
          <a href="mailto:support@askizzy.org.au?subject=Ask Izzy Plus Support&body=Hi Infoxchange, I'm using Ask Izzy Plus and need assistance with...">Contact Infoxchange</a>
        </li>
        <li>
          <a href="https://askizzy.org.au/terms">Terms</a>
        </li>
        <li>
          <a href="https://www.infoxchange.org/au/ask-izzy">Online Resources</a>
        </li>
        <li>
          <a href="https://github.com/nodebusters">About Nodebusters</a>
        </li>
        <li>
          <a href="mailto:askizzyplus.nodebusters@gmail.com?subject=Ask Izzy Plus Feedback&body=Hi Nodebusters, I'm using Ask Izzy Plus and would like to submit feedback about my user experience.">Report an Issue </a>
        </li>
      </ul>
    </footer>
    );
  }
}
// const Footer = () => {
//   return (
//     <footer className="footer-container">
//       <ul className="footer-list">
//         <li>
//           <a href="https://askizzy.org.au/about">About Ask Izzy Plus</a>
//         </li>
//         <li>
//           <a href="mailto:support@askizzy.org.au?subject=Ask Izzy Plus Support&body=Hi Infoxchange, I'm using Ask Izzy Plus and need assistance with...">Contact Infoxchange</a>
//         </li>
//         <li>
//           <a href="https://askizzy.org.au/terms">Terms</a>
//         </li>
//         <li>
//           <a href="https://www.infoxchange.org/au/ask-izzy">Online Resources</a>
//         </li>
//         <li>
//           <a href="https://github.com/nodebusters">About Nodebusters</a>
//         </li>
//         <li>
//           <a href="mailto:askizzyplus.nodebusters@gmail.com?subject=Ask Izzy Plus Feedback&body=Hi Nodebusters, I'm using Ask Izzy Plus and would like to submit feedback about my user experience.">Report an Issue </a>
//         </li>
//       </ul>
//     </footer>
//   );
// };

export default Footer;