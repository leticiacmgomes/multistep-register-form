import './StepMarker.css'

import { useSelector } from 'react-redux'

export const StepMarker = () => {
  
  let currentStep = useSelector(state => state.form.currentStep)
  
  return(
    <div className="step-marker">
      <p>Step {currentStep} of 3</p>
      
      <section className="marker-container">
        <div className={`${currentStep === 1 ? 'current' : ''} marker`}></div>
        <div className={`${currentStep === 2 ? 'current' : ''} marker`}></div>
        <div className={`${currentStep === 3 ? 'current' : ''} marker`}></div>
      </section>
    </div>
  )
}