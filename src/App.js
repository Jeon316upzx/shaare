import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Steps from './components/steps';


function App() {
  const [ currentStep, setCurrentStep ]= useState(0)

  const handleNextStep = () =>{
    setCurrentStep(currentStep + 1)
  }

  const handlePreviousStep = () =>{
    if(currentStep > 0){
      setCurrentStep(currentStep - 1)
    }else{
      setCurrentStep(0)
    }
   
  }

  return (
    <div>
       <Navbar onBack={handlePreviousStep}/>
       <Steps currentStep={currentStep}  onNext={handleNextStep}/>
    </div>
  );
}

export default App;
