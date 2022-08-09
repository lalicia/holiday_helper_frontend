import "./ContactUs.css";
import { Icon } from "@iconify/react";

function ContactUs() {
  return (
    <div>
      <h2 className="page-title">Contact Us</h2>
      <div className="contact-margin">
        <Icon className="contact-icon" icon="ic:outline-email" />
        <span className="bold-text">Email:</span>
        <span className="contact-text">holiday-helper@gmail.com</span>
      </div>
      <div className="contact-margin">
        <Icon className="contact-icon" icon="akar-icons:phone" />
        <span className="bold-text">Phone:</span>
        <span className="contact-text">0800 000 0000</span>
      </div>
      <div className="contact-margin">
        <Icon className="contact-icon" icon="akar-icons:twitter-fill" />
        <span className="bold-text">Twitter:</span>
        <span className="contact-text">@holidayhelper</span>
      </div>
      <div className="align-address">
        <div className="contact-margin">
          <Icon className="contact-icon" icon="jam:write" />
          <span className="bold-text">Address:</span>
        </div>
        <div className="contact-address">
          <span className="contact-text">Holiday Helper</span>
          <span className="contact-text">12345 Named Street</span>
          <span className="contact-text">City Name</span>
          <span className="contact-text">County Name</span>
          <span className="contact-text">A0 0AA</span>
        </div>
      </div>
      <h2 className="sub-title">Contact Form</h2>
      <div className="contact-form-container">
        <span className="box-text">Email:</span>
        <span className="input-email"></span>
        <span className="box-text">Message:</span>
        <span className="input-message"></span>
        <button className="submit-button">Submit</button>
      </div>
    </div>
  );
}

export default ContactUs;
