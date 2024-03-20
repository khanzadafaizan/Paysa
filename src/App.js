import "./App.css";
// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Manage from "./Manage";
import Signup from "./Signup";
import Signin from "./Signin";
import Forgot from "./Forgot";
import Qrcode from "./Qrcode";
import Dashborad from "./Dashborad";
import Accounts from "./Accounts";
import Cards from "./Cards";
import Physical from "./Physical";
import Virtual from "./Virtual";
import Profile from "./components/Profile";
import Transactions from "./Transactions";
import Pricing from "./Pricing";
import Invoicing from "./Invoicing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Manage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/qrcode" element={<Qrcode />} />
          <Route path="/dashborad" element={<Dashborad />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/physical" element={<Physical />} />
          <Route path="/virtual" element={<Virtual />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/invoicing" element={<Invoicing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
