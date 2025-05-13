import React, { useState, useEffect } from "react";
import "../CSS-Files/Projects.module.css";
import { RingLoader } from "react-spinners";
import style from "../CSS-Files/TechChallenges.module.css";
import api from "../api";

function TechnicalChallenges() {
    const [challenges, setChallenges] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getChallengesData() {
            try {
                const response = await fetch(`${api}/api/v1/techchallenges`)
                const challengesJsonData = await response.json();
                setChallenges(challengesJsonData.result)
            } catch (error) {
                setError('Failed to fetch challenges data');
            }
        }
        getChallengesData()

    }, [])

    useEffect(() => {
        if (challenges.length > 0) {
            setLoading(false);
        }
    }, [challenges]);

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
                        {error ? <p style={{ color: 'red' }}> {error}</p> : <p>...Technical challenges data is being loaded 🤞</p>}
                    </div>
                ) :
                    <div className={style.challengesContainer}>
                        <h1 className={style.title}>Technical Challenges</h1>
                        {challenges.map((eachChallenge) => {
                            return (
                                <div className={style.challengeCard} key={eachChallenge.id}>
                                    <h3 className={style.challengeTitle}>Problem: {eachChallenge.title}</h3>
                                    <span className={style.span}>Situation</span>
                                    <p>{eachChallenge.situation}</p>
                                    <span className={style.span}>Task</span>
                                    <p>{eachChallenge.task}</p>
                                    <span className={style.span}>Action</span>
                                    <p>{eachChallenge.action}</p>
                                    <span className={style.span}>Result</span>
                                    <p>{eachChallenge.result}</p>
                                </div >
                            )
                        })}

                    </div>

            }
        </div>
    )
}

export default TechnicalChallenges;