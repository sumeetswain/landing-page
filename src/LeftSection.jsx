import "./LeftSection.css";
import Button from "@mui/material/Button";
import Amazon from "./assets/amazon.png";
import Flipkart from "./assets/flipkart-icon.png";

export default function LeftSection() {
  return (
    <>
      <section>
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <Button variant="contained" color="error">
          Shop Now
        </Button>
        <Button sx={{ margin: "0px 20px" }} variant="outlined">
          Category
        </Button>
        <span>Also Available On </span>
        <img src={Flipkart} alt="" />
        <img src={Amazon} alt="" />
      </section>
    </>
  );
}
