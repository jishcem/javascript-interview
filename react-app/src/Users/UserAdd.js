import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import UserAddStep1 from "./UserAddStep1";
import UserAddStep2 from "./UserAddStep2";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "./usersSlice";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const steps = ["Add Namd & Email", "Choose Password"];

export default function UserAdd() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);

  const [user, setUser] = useState({ username: "", email: "", password: "" }); // Initializing the user data with empty string values. 
  const submitStep1 = (e) => {
    setUser({ ...user, ...e });
    setActiveStep(activeStep + 1);
  };

  const submitStep2 = (e) => {
    console.log(e);
    console.log({ ...user, password: e });
    setUser({ ...user, password: e });
    dispatch(add(user)); // Dispatch action to the store
    navigate("/users"); // Redirect to the listing page.
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleNext = () => {
    console.log("Clicked on the next button");
  };

  let stepContent;
  if (activeStep === 0) {
    stepContent = <UserAddStep1 userInitial={user} onSubmit={submitStep1} />;
  } else {
    stepContent = <UserAddStep2 userInitial={user} onSubmit={submitStep2} />;
  }

  return (
    <Box sx={{ width: "100%" }}>
      <NavLink to={`/users`}>Users List</NavLink>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      <React.Fragment>
        {JSON.stringify(user)}
        {stepContent}

        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />
          <Button onClick={handleNext}>
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </Box>
      </React.Fragment>
    </Box>
  );
}
