import logo from "../public/imgs/Logo.jpg";
import Button from "@mui/material/Button";
const Nav = () => {
  return (
    <div>
      <div
        style={{
          background: "#F8F9FA",
          paddingTop: "2rem",
          paddingBottom: "2rem",
          padding: "1rem",
        }}
      >
        <div>
          <img
            src={logo}
            style={{ width: "6rem", height: "6rem", borderRadius: "100%" }}
          ></img>
        </div>
      </div>
      <div className="bg-[#00A6F0] py-[1rem] flex justify-center items-center">
        <p className="text-[white] mr-3 text-xl">Do you have any questions?</p>
        <Button
          variant="contained"
          style={{ background: "#DC3545", borderRadius: "0.5rem" }}
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default Nav;
