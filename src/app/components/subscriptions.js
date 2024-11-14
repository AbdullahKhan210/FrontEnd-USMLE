import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Subscriptions = () => {
  const mapArr = [1, 2, 3, 4];
  const router = useNavigate();
  return (
    <div>
      <div className="w-full flex flex-col items-center">
        <>
          {mapArr.map((el) => {
            return (
              <div className="w-[40rem] p-[1rem] pl-[3rem] pr-[3rem] bg-[#DCF0E7] flex justify-between items-center mt-[1rem]">
                <div className="text-center">
                  <h2>STEP1 QBank</h2>
                  <h2>
                    <span className="text-[#1E95E7]">Expires:&nbsp;</span>
                    2025-04-29&nbsp; 06:30PM
                  </h2>
                </div>
                <div className="flex">
                  <Button
                    variant="contained"
                    style={{
                      background: "#198754",
                      borderRadius: "0.5rem",
                      textTransform: "none",
                    }}
                    size="small"
                    onClick={() => {
                      router("/dashboard");
                    }}
                  >
                    Launch
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    style={{
                      background: "#0D6EFD",
                      borderRadius: "0.5rem",
                      textTransform: "none",
                      marginLeft: "1rem",
                    }}
                  >
                    Extend
                  </Button>
                </div>
              </div>
            );
          })}
        </>
      </div>
    </div>
  );
};
export default Subscriptions;
