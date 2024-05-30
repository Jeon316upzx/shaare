import React from "react";
import AddressForm from "../services/addressForm";
import SelectServices from "../services/selectServices";
import Step from "./step";


const Steps = ({ currentStep, onNext }) => {
  const steps = [
    {
      title: "Help us locate you",
      subTitle: "choose a landmark closest to your area",
    },
    {
      title: "What service would you like to book?",
      subTitle: "You can select one type of cleaning and extra tasks",
    },
    {
      title: "Select Extras",
      subTitle: "You can select one type of cleaning and extra tasks",
    },
    {
      title: "Confirm Booking",
      subTitle: "You can select one type of cleaning and extra tasks",
    },
    { title: "title 2", subTitle: "subtitle 2" },
    { title: "title 3", subTitle: "subtitle 3" },
  ];
  return (
    <div className="flex flex-col p-5">
      <div className="flex flex-row items-center justify-between">
        {steps &&
          steps.map((step, index) => {
            return (
              <Step index={index} currentStep={currentStep}/>
            );
          })}
      </div>
      {currentStep === 0 && (
        <AddressForm onNext={onNext} data={steps[currentStep]} />
      )}
      {currentStep === 1 && (
        <SelectServices onNext={onNext} data={steps[currentStep]} />
      )}
    </div>
  );
};

export default Steps;
