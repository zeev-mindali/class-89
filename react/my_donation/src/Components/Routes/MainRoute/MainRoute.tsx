import { Route, Routes } from "react-router-dom";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import AddDonation from "../../Pages/AddDonation/AddDonation";
import DonationInfo from "../../Pages/DonationInfo/DonationInfo";
import DonationList from "../../Pages/DonationList/DonationList";
import MainPage from "../../Pages/MainPage/MainPage";
import Page404 from "../../Pages/Page404/Page404";
import ThankYou from "../../Pages/ThankYou/ThankYou";
import "./MainRoute.css";

// about , add , info, list, thanks
function MainRoute(): JSX.Element {
  return (
    <div className="MainRoute">
      <Routes>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/add" element={<AddDonation />} />
        <Route path="/info/:donationSum/:donationOwner/:donationMemo/:timeStamp" element={<DonationInfo />} />
        <Route path="/list" element={<DonationList />} />
        <Route path="/thanks" element={<ThankYou />} />
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default MainRoute;
