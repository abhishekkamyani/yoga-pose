import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import { ProtectedRoute } from "./components/ProtectedRoute";


export default function App() {  
  return (
    // <div className="bg-white dark:bg-dark-main">
      <Router>
        <LogoutModal />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/account-settings" element={<AccountSettings />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/module/correct-system" element={<Module />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<ProtectedRoute component={<Contact />} />} />
        </Routes>
        <Footer />
      </Router>
    // </div>
  )
}