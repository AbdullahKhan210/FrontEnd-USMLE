import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./app/pages/loginPage";
import LaunchPage from "./app/pages/launchPage";
import DashboardTemplate from "./app/pages/template/dashboardLayout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} exact></Route>
        <Route path="/launch" element={<LaunchPage />} exact></Route>
        <Route path="/dashboard" element={<DashboardTemplate />} exact></Route>
      </Routes>
    </div>
  );
}

export default App;
