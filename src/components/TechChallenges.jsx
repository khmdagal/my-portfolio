import { useQuery } from '@tanstack/react-query';
import "../CSS-Files/Projects.module.css";
import { RingLoader } from "react-spinners";
import style from "../CSS-Files/TechChallenges.module.css";
import api from "../api";

function TechnicalChallenges() {
 

    async function getChallengesData() {
            try {
                const response = await fetch(`${api}/api/v1/techchallenges`)
                const challengesJsonData = await response.json();
                return challengesJsonData.result
            } catch (error) {
                console.log(`Failed to fetch challenges data ${error.message}`);
            }
        }

     const {data, isLoading, error} = useQuery({
      queryKey: ['challenges'],
      queryFn: getChallengesData,
      staleTime: 60000 // One minute
    });



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
                        {error ? <p style={{ color: 'red' }}> {error.message}</p> : <p>...Technical challenges data is being loaded 🤞</p>}
                    </div>
                ) :
                    <div className={style.challengesContainer}>
                        <h1 className={style.title}>Technical Challenges</h1>
                        {data?.map((eachChallenge) => {
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