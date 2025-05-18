import { Link } from "react-router-dom"
import style from "../CSS-Files/Navbar.module.css"

export default function NavBar() {
  const pages = [
    { name: "Home", link: "/home" },
    { name: "About Me", link: "/about" },
    { name: "Skills", link: "/skills" },
    { name: "Projects", link: "/projects" },
    { name: "Technical Challenges", link: "/techchallenges" },
    { name: "FeedBack", link: "/feedback" },
  ];
 
    return (
      <nav className={style.nav}>
        <ul className={style.navList}>
          {pages.map((page) => (
            <li key={page.name}>
              <Link to={page.link} className={style.navLink}>
                {page.name}
              </Link>
            </li>
          ))} 
        </ul>
      </nav>
    );
}
