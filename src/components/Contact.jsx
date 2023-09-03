//import Form from "react-bootstrap/Form";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../CSS-Files/Contact.css";

function Contact() {
  const form = useRef();
  const [successMsg, setSuccessMsg] = useState();

  const handleSendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then((result) => {
        if (result.status === 200) {
          setSuccessMsg("Thanks for contacting me, I'll get back to you soon😀")
        }
      })
      .catch((err) => console.error(err));
    e.target.reset();
  };

  return (
    <div className="container">
      <h1 id="email-title" className="title">
        Contact me
      </h1>
      {successMsg && <div className="successMsg">{successMsg}</div>}
      <form
        ref={form}
        onSubmit={handleSendEmail}
        className="--form-control --card --flex-center --dir-column"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Please enter your name"
          required
        />
        <input
          value={"khmdagal@gmail.com"}
          type="email"
          name="uer_email"
          placeholder="Email"
          hidden
        />

        <input type="text" name="subject" placeholder="Subject" required />
        <textarea
          className="--textarea"
          name="user_message"
          placeholder="Message"
          required
        />
        <button className="--btn --btn-primary">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
