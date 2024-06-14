import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import "./MainPage.css";
export default function MainPage() {
  return (
    <div className="container">
      <LeftSection />
      <RightSection />
    </div>
  );
}
