import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import UserAddStep1 from "./UserAddStep1";
import UserAddStep2 from "./UserAddStep2";
import { useState } from "react";

const steps = ["Add Namd & Email", "Choose Password"];

export default function UserAdd() {
  const [activeStep, setActiveStep] = useState(0);

  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const submitStep1 = (e) => {
    setUser({...user, ...e});
    setActiveStep(activeStep + 1);
  };

  const submitStep2 = (e) => {
    console.log(e);
    console.log({...user, password: e});
    setUser({...user, password: e});
  }

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
