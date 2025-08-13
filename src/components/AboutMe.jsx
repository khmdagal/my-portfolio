import { useQuery } from '@tanstack/react-query'
import { ScaleLoader } from "react-spinners";
import style from "../CSS-Files/AboutMe.module.css";
import api from "../api";

function AboutMe() {
  const color = "#ffffff";
  
   async function getAboutMeData() {
      try {
        const response = await fetch(`${api}/api/v1/aboutme`);
        const jsonData = await response.json();
        return jsonData.result[0].about
      } catch (error) {
        console.log(error.message)
      }
    }
  const {data, isLoading, error} = useQuery({
    queryKey: ['aboutMe'],
    queryFn: getAboutMeData,
    staleTime: 60000
  })

  return (
    <div className={style.mainContainer}>
      {
        isLoading ? (
          <div className={style.loaderContainer}>
          <ScaleLoader
            color={color}
            loading={isLoading}
            height={100}
            width={50}
            radius={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          { error ? <p style={{ color: 'red' }}> { error.message }</p> : <p>...Self introduction data is being loaded 🤞</p>}
          </div>
        ) :
          <div className={style.loaderContainer}>
            <h1 className={style.title}>About Me</h1>
            <div className={style.introContainer}>
              {
                data?.split('. ').map((eachParagraph) => {
                  return <p> {eachParagraph}. </p>
                })
              }
            </div>
          </div>
      }

    </div>
  );
}

export default AboutMe;
