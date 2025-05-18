import React, { useState, useEffect } from "react";
import { RingLoader } from "react-spinners";
import style from "../CSS-Files/Feedback.module.css";
import api from "../api";

function GetFeedback({ propData }) {
    const [feedbacks, setFeedbacks] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getFeedbacksData() {
            try {
                const response = await fetch(`${api}/api/v1/feedbacks`)
                const feedbacksJsonData = await response.json();
                console.log(feedbacksJsonData)
                setFeedbacks(feedbacksJsonData.result)
            } catch (error) {
                setError('Failed to fetch feedback data');
            }
        }
        getFeedbacksData()

    }, [])

    useEffect(() => {
        if (feedbacks.length > 0) {
            setLoading(false);
        }
    }, [feedbacks]);

    useEffect(() => {
        if (propData !== undefined) {
            feedbacks.push(propData)
        }
    }, [propData, feedbacks]);

    // Sort Decending order
    const indexedFeedbacks = feedbacks?.map((el, indx) => ({ indx, value: el }));
    indexedFeedbacks?.sort((a, b) => b.indx - a.indx);

    console.log({ indexedFeedbacks })

    return (
        <div>
            {
                loading ? (
                    <div className={style.loaderContainer}>
                        <RingLoader
                            color="#000000"
                            loading={loading}
                            height={100}
                            width={50}
                            radius={50}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                        {error ? <p style={{ color: 'red' }}> {error}</p> : <p>...Feedback data is being loaded 🤞</p>}
                    </div>
                ) :


                    <div className={style.styledTable}>
                        {indexedFeedbacks && indexedFeedbacks?.map((eachFeedback) => {
                            return (
                                <div className={style.rows} key={eachFeedback.indx}>
                                    <div className={style.feedback}>{eachFeedback.value.feedback}</div>
                                    <div className={style.rating}>{eachFeedback.value.rating}</div>
                                </div>
                            )
                        })}
                    </div>
            }
        </div>
    )
}
export default GetFeedback;
