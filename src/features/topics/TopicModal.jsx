import './TopicModal.css'

import { useDispatch, useSelector } from 'react-redux'

/*Components*/
import { Topic } from './Topic.jsx'
import { Button } from '../../components/ui/Button.jsx'

/*actions*/
import { toggleTopic, nextStep } from '../../store/formSlice.jsx'


export const TopicModal = () => {
  const dispatch = useDispatch()
  
  const currentStep = useSelector(state => state.form.currentStep)
  const topics = ['Software Development', 'User Experience', 'Graphic Design']
  const selectedTopics = useSelector(state => state.form.selectedTopics)
  
  const handleNextStep = () => {
    if (currentStep === 2 && selectedTopics.length=== 0) {
      alert('Choose at least one topic!!');
      return;
    }
          
    dispatch(nextStep())
  }
  
  return(
    <div className="topic-modal">
      <h1>Which topics are you interested in ?</h1>
      
      {topics.map((topic) =>
        <Topic
          key={topic}
          isSelected={selectedTopics.includes(topic)}
          topic={topic}
          onClick={() => dispatch(toggleTopic(topic))}
        /> 
      )}
      
      <Button 
        buttonText="continue"
        onClick={handleNextStep}
      />
    </div>
  )
}