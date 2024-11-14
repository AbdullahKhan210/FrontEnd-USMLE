import Footer from "../components/footer";
import Nav from "../components/nav";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useNavigate();
  const loginHandler = async (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:3001/api/v1/users/login", {
        email,
        password,
      })
      .then((data) => {
        console.log(data);
        localStorage.setItem("authToken", data.token);
        router("/launch");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full max-h-[100vh]">
      <Nav />
      <div className="bg-[#F5F5F5] flex justify-center items-center h-[75vh] w-full">
        <div className="w-[35%]">
          <div>
            <h2 className="text-2xl font-semibold">Login</h2>
            <p className="text-xl  my-[0.5rem]">
              Sign in using your Usmles account
            </p>
          </div>
          <form onSubmit={loginHandler}>
            <div className=" border-[2px] border-[#CCCCCC] flex flex-col items-center p-[2.5rem] rounded-xl mt-[2rem]">
              <TextField
                required
                id="standard-basic"
                variant="standard"
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: "100%" }}
              />
              <div className="py-[1.5rem] w-full">
                <TextField
                  required
                  id="standard-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="standard"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: "100%",
                  }}
                />
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="text-[#00A6F0] underline text-xl cursor-pointer">
                  Forgot Password?
                </p>
                <Button
                  variant="contained"
                  style={{ background: "#00A6F0", borderRadius: "0.5rem" }}
                  type="submit"
                >
                  Login
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default LoginPage;
