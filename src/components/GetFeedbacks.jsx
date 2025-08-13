import React, { useEffect } from "react";
import { useQuery } from '@tanstack/react-query'
import { RingLoader } from "react-spinners";
import style from "../CSS-Files/Feedback.module.css";
import api from "../api";

function GetFeedback({ propData }) {

    async function getFeedbacksData() {
        try {
            const response = await fetch(`${api}/api/v1/feedbacks`)
            const feedbacksJsonData = await response.json();
            return feedbacksJsonData.result
        } catch (error) {
            console.log(error.message)
        }
    }

    const { data, isLoading, error } = useQuery({
        queryKey: ['getFeedback'],
        queryFn: getFeedbacksData,
        staleTime: 60000 // One minute
    })

    useEffect(() => {
        if (propData !== undefined) {
            data.push(propData)
        }
    }, [propData, data]);

    // Sort Decending order
    const indexedFeedbacks = data && data?.map((el, indx) => ({ indx, value: el }));
    indexedFeedbacks?.sort((a, b) => b.indx - a.indx);

    return (
        <div>
            {
                isLoading ? (
                    <div className={style.loaderContainer}>
                        <RingLoader
                            color="#000000"
                            loading={isLoading}
                            height={100}
                            width={50}
                            radius={50}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                        {error ? <p style={{ color: 'red' }}> {error.message}</p> : <p>...Feedback data is being loaded 🤞</p>}
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
