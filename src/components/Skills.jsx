import { useQuery } from '@tanstack/react-query'
import { GridLoader } from "react-spinners";
import api from "../api";
import Card from "react-bootstrap/Card";
import style from "../CSS-Files/Skills.module.css"

export default function Skills() {

  const color = "black";
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

    async function getSkills() {
      try {
        const response = await fetch(`${api}/api/v1/skills`);
        const skillsJsonData = await response.json();
        return skillsJsonData.result
      } catch (error) {
        console.log(`Failed to fetch skills data ${error.message}`);
      }
    }

    const {data, isLoading, error} = useQuery({
      queryKey: ['skills'],
      queryFn: getSkills,
      staleTime: 60000 // One minute
    });


  return (
    <div className={style.mainContainer}>
      {
        isLoading ? (
          <div className={style.loaderContainer}>
            <GridLoader
              color={color}
              loading={isLoading}
              cssOverride={override}
              height={100}
              size={30}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            {error ? <p style={{ color: 'red' }}> {error.message}</p> : <p>...Skills data is being loaded 🤞</p>}
          </div>
        ) :
          <div className={style.mainContainer}>
            <h1 className={style.title}>Skills</h1>
            <div className={style.skillsContainer}>
              {
                data?.map((eachSkill) => {
                  return (
                    <Card key={eachSkill._id} className={style.card}>
                      <Card.Body>
                        <Card.Title>{eachSkill.name}</Card.Title>
                      </Card.Body>
                    </Card>
                  )
                })
              }
            </div>
          </div>
      }
    </div>
  );
}
