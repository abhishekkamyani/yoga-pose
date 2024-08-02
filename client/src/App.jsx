import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import AccountSettings from "./pages/AccountSettings";
import LogoutModal from "./components/LogoutModal";
import Module from "./pages/Module";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { useUserInfo } from "./contexts/UserContext";

export default function App() {
  return (
    // <div className="bg-white dark:bg-dark-main">
    <Router>
      <LogoutModal />
      <Navbar />
      <Routes>
        {/* These are the general routes -> for both unauthorized and authorized users */}
        <Route exact path="/" element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />

        {/* These routes are only for authorized users */}
        <Route element={<AuthRequired />}>
          <Route path="/account-settings" element={<AccountSettings />} />
          <Route path="/module/correct-system" element={<Module />} />
        </Route>

        {/* These routes only accessible when user is not login/registered */}
        <Route element={<UserNotRegistered />}>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
    // </div>
  );
}

const AuthRequired = () => {
  const { isAuthenticated } = useUserInfo();
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

const UserNotRegistered = () => {
  const { isAuthenticated } = useUserInfo();
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};
