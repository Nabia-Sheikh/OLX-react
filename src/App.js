import "./App.css";
import Ads from "./Components/Ads/Ads";
import Cards from "./Components/Cards/Cards";
import Copyright from "./Components/Copyright/Copyright";
import Footer from "./Components/Footer/Footer";
import Footerbg from "./Components/Footer/Footerbg";
import MobileCopyright from "./Components/MobileCopyright/MobileCopyright";
import MobileFooter from "./Components/MobileFooter/MobileFooter";
import Nav from "./Components/Nav/Nav";
import SubNav from "./Components/Nav/SubNav";
import Vertical from "./Components/VerticallFooter/Vertical";

function App() {
  return (
    <>
      <Nav />
      <SubNav />
      <img src="image/hero_bg_pk1.jpg" alt = "" className="bg-hero" />
      <img src="image/add1.PNG" alt="" className="add" />
      <Cards />
      <Ads />
      <Vertical />
      <MobileFooter />
      <MobileCopyright />
      <Footer />
      <Footerbg />
      <Copyright />

    </>
  );
}

export default App;
