import "./Navbar.css";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import Nike from "./assets/Nike.png"; // ! first import the image file
export default function Navbar() {
  const BlackButton = styled(Button)`
    background-color: white;
    color: black;
  `;
  return (
    <nav>
      <a href="https://www.nike.com" target="_blank">
        <img src={Nike} alt="logo" />
      </a>
      {/*use the imported file as the src*/}
      <div>
        <BlackButton variant="text">Menu</BlackButton>
        <BlackButton variant="text">Location</BlackButton>
        <BlackButton variant="text">About</BlackButton>
        <BlackButton variant="text">Contact</BlackButton>
      </div>
      <div>
        <Button variant="contained" color="error">
          Login
        </Button>
      </div>
    </nav>
  );
}
