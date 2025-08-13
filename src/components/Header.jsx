import { useQuery } from '@tanstack/react-query'
import { ClipLoader } from "react-spinners";
import profileImage from "../Images/Profilet1.jpg";
import "../CSS-Files/Header.module.css";
import api from "../api";


function Header() {

  const color = "#ffffff";
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  async function getProfile() {
    try {
      const response = await fetch(`${api}/api/v1/aboutme`);
      const jsonData = await response.json();
      return jsonData.result[0];
    } catch (error) {
      console.log(`Failed to fetch about me data ${error.message}`);
    }
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
    staleTime: 60000 // 1 minute
  })


  return (
    <header>
      {isLoading ? (
        <div className="loader-container">
          <ClipLoader
            color={color}
            loading={isLoading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          {error ? <p style={{ color: 'red' }}> {error}</p> : <p>...Personal data is being loaded 🤞</p>}
        </div>
      ) : <div>
        <div className="image-container">
          <img rel="Profile Image" src={profileImage} alt="Profile_Picture" />
        </div>
        <h1 id="name">{`${data?.first_name} ${data?.last_name}`}</h1>
        <h2 id="profession">{data?.profession}</h2>
      </div>

      }

    </header>

  );
}

export default Header;
