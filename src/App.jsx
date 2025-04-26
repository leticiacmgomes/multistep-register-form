import './App.css'

import { useSelector } from 'react-redux'

/*Modals*/
import { RegisterModal } from './features/register/RegisterModal.jsx'
import { TopicModal } from './features/topics/TopicModal.jsx'
import { SummaryModal } from './features/summary/SummaryModal.jsx'

/*Components*/
import { StepMarker } from './components/ui/StepMarker.jsx'

function App() {
  
  let currentStep = useSelector((state) => state.form.currentStep)
  
  const steps = {
    1: <RegisterModal />,
    2: <TopicModal />,
    3: <SummaryModal />
  }
  
  return (
    <div className="App">
      {steps[currentStep]}
      <StepMarker />
    </div>
  )
}

export default App
