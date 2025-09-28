import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const StepperWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Marker = styled.div`
  content: "";
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ $currentStep }) =>
    $currentStep ? "#5425AF" : "#4D5562"};
`;

export const Stepper = () => {
  const steps = [
    {
      step: "register",
      path: "/",
    },
    {
      step: "topics",
      path: "/topics",
    },
    {
      step: "summary",
      path: "/summary",
    },
  ];
  const currentPath = useLocation().pathname;
  const currentIndex =
    steps.findIndex((element) => element.path === currentPath) + 1;

  return (
    <StepperWrapper>
      <span style={{ color: "#A1A1A9" }}>Step {currentIndex} of 3</span>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        {steps.map((element) => (
          <Marker
            key={element.step}
            $currentStep={currentPath === element.path}
          />
        ))}
      </div>
    </StepperWrapper>
  );
};
