import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import GetFeedback from "./GetFeedbacks";
import style from "../CSS-Files/Feedback.module.css";
import api from "../api";


function Feedback() {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState('');
  const [propData, setPropData] = useState()
  const [successMsg, setSuccessMsg] = useState();
  const [errorMsg, setErrorMsg] = useState();


  const formData = { id: uuidv4(), name, email, feedback, rating };

  const handleSubmit = async (e) => {
    e.preventDefault();


    fetch(`${api}/api/v1/feedbacks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      accept: "application/json",
      body: JSON.stringify(formData)
    }).then((response) => {
      if (!response.ok) {
        setErrorMsg('😉 Feedback not sent')
      } else {

        setSuccessMsg('Thanks ✉️ your feedback is received');
        setPropData(formData)
        setName('');
        setEmail('');
        setRating('');
        setFeedback('');
      }
    })
  };

  return (

    <div className={style.feedbackContainer}>

      <form ref={form} onSubmit={handleSubmit} className={style.feedbackForm}>
        <h1 className={style.title}>Feedback</h1>
        
          <label htmlFor="name">Name</label>
          <input id="name" className={style.feedbackNameInput} type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" placeholder="Your Name" required />
        
          <label htmlFor="email">Email </label>
          <input id="email" className={style.feedbackEmailInput} type="text" value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Your email" required />
       
          <label htmlFor="rating" >Rating (only numbers)</label>
          <input id="rating" className={style.feedbackRatingInput} type="number" value={rating} onChange={(e) => setRating(e.target.value)} name="rating" placeholder="Place rate this portfolio" required />
     
          <label htmlFor="feedbackBox">Feedback box</label>
          <textarea id="feedbackBox" className={style.feedbackInput} name="feedback" value={feedback} onChange={(e) => setFeedback(e.target.value)} placeholder="Your Feedback is Important" required  ></textarea>
       
        <button className={style.feedbackSubmitButton} type="submit">Send</button>
      </form>
      {successMsg && <p className={style.successMsg}>{successMsg}</p>}
      {errorMsg && <p className={style.errorMsg}>{errorMsg}</p>}

      <GetFeedback propData={propData} />
    </div>
  );
}

export default Feedback;