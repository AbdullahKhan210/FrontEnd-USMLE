import { Button } from "@mui/material";
import Footer from "../components/footer";
import Nav from "../components/nav";
import Subscriptions from "../components/subscriptions";
import { useState } from "react";
import Profile from "../components/profile";

const LaunchPage = () => {
  const [displayOption, setDisplayOption] = useState("subs");
  return (
    <div>
      <Nav />
      <div className="h-[75vh]">
        <div className="p-[1rem] bg-[#EDEDED] flex justify-center">
          <div className="flex justify-center items-center">
            <h2
              className="cursor-pointer"
              style={{
                color: `${displayOption === "subs" ? "#1E95E7" : ""}`,
              }}
              onClick={() => setDisplayOption("subs")}
            >
              Subscription
            </h2>
            <h2
              className="ml-[1rem] cursor-pointer"
              style={{
                color: `${displayOption != "subs" ? "#1E95E7" : ""}`,
              }}
              onClick={() => setDisplayOption("profile")}
            >
              Profile
            </h2>
          </div>
        </div>
        <div>{displayOption === "subs" ? <Subscriptions /> : <Profile />}</div>
      </div>
      <Footer />
    </div>
  );
};

export default LaunchPage;
