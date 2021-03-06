import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Step1, Step2, Step3 } from "./Steps";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: "inline-block",
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));
var checkValid;
const setCheckValid = (x) => {
  checkValid = x;
};
var xStep;
const onStep = (x) => {
  xStep = x;
};
function getSteps() {
  return ["Basic Details", "Highlights and Itnerary", "Package and Pricing"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Step1 onStep={(s) => onStep(s)} />;
    case 1:
      return <Step2 onStep={(s) => onStep(s)} />;
    case 2:
      return (
        <Step3
          isValid={(checkValid) => {
            setCheckValid(checkValid);
            console.log(checkValid);
          }}
          onStep={(s) => onStep(s)}
        />
      );
    default:
      return "Unknown step";
  }
}

export default function DetailForm() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const steps = getSteps();

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };
  const getData = () => {
    if (xStep === 1) {
      console.log("step1");
    }
    if (xStep === 2) {
      console.log("step2");
    }
    if (xStep === 3) {
      console.log("step3");
    }
  };
  const handleNext = () => {
    getData();
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (checkValid) {
      // document.getElementById("VendorForm").submit()
      handleComplete();
    } else {
      alert("please check that all fields are valid");
    }
  };

  return (
    <div className={classes.root}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton
              onClick={handleStep(index)}
              completed={completed[index]}
            >
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                  >
                    Next
                  </Button>
                ) : completedSteps() === totalSteps() - 1 ? (
                  <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  >
                      Submit
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleComplete}
                  >
                    Next
                  </Button>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
