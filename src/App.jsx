import PageNotFound from "./pages/page-not-found/PageNotFound";
import { Landingpage } from "./pages/landingpage/landingpage";
import { Route, Routes } from "react-router-dom";
import Membership from "./pages/membership/Membership";
import Contact from "./pages/contact/Contact";
// import Profile from "./pages/user-setting/profile/Profile";
// import Notifications from "./pages/user-setting/profile/Notifications";
import UserSettings from "./pages/user-setting/UserSettings";
import Checkout from "./pages/checkout/Checkout";

function App() {
  // const UserSettings = () => {
  //   return (
  //     <Routes>
  //       <Route path="profile-info" element={<Profile />} />
  //       <Route path="notification" element={<Notifications />} />
  //     </Routes>
  //   );
  // };
  return (
    <>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Landingpage />} />
        <Route path="/home" element={<Landingpage />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/user-setting" element={<UserSettings />} />
        <Route path="/user-setting/:option" element={<UserSettings />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
