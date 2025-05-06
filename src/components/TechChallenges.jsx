import React, { useState, useEffect } from "react";
//import Card from 'react-bootstrap/Card'
import "../CSS-Files/Projects.module.css";
import api from "../api";

function TechnicalChallenges() {

    const [challenges, setChallenges] = useState([]);

    useEffect(() => {
        async function getChallengesData() {
            const response = await fetch(`${api}/api/v1/techchallenges`)
            const challengesJsonData = await response.json();
            setChallenges(challengesJsonData.result)
        }
        getChallengesData()

    }, [])

    console.log(challenges)
    return (
        <div>
            {challenges.map((eachChallenge) => {
                return (
                    <div className="projectCard" key={eachChallenge.id}>
                        <span className="projectTitle">Situation</span>
                        <p>{eachChallenge.situation}</p>
                        <span className="projectTitle">Task</span>
                        <p>{eachChallenge.task}</p>
                        <span className="projectTitle">Action</span>
                        <p>{eachChallenge.action}</p>
                        <span className="projectTitle">Result</span>
                        <p>{eachChallenge.result}</p>
                    </div >
                )
            })}

        </div>
    )
}

export default TechnicalChallenges;