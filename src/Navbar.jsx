import "./Navbar.css";
import Button from "@mui/material/Button";
// import { Link } from "react-router-dom";
import Nike from "./assets/Nike.png"; // ! first import the image file
export default function Navbar() {
  return (
    <nav>
      <a href="https://www.nike.com" target="_blank">
        <img src={Nike} alt="logo" />
      </a>
      {/*use the imported file as the src*/}
      <div>
        <Button variant="text" color="error">
          Menu
        </Button>
        <Button variant="text" color="error">
          Location
        </Button>
        <Button variant="text" color="error">
          About
        </Button>
        <Button variant="text" color="error">
          Contact
        </Button>
      </div>
      <div>
        <Button variant="contained" color="error">
          Login
        </Button>
      </div>
    </nav>
  );
}
