import './SummaryModal.css'

/*Components*/
import { Button } from '../../components/ui/Button.jsx'

import { useSelector, useDispatch } from 'react-redux'

/*Actions*/
import { confirm } from '../../store/formSlice.jsx'

export const SummaryModal = () => {
  const dispatch = useDispatch()
  
  const {name, email} = useSelector((state) => state.form.formData)
  const selectedTopics = useSelector((state) => state.form.selectedTopics)
  
  const handleConfirm = () => {
    alert('Success!!')
    dispatch(confirm())
  }
  
  return(
    <div className="summary-modal">
      <h1>Summary</h1>
      
      <section className="user-info">
        <span><strong>Name: </strong>{name}</span>
        <span><strong>Email: </strong>{email}</span>
      </section>
      
      <section className="selected-topics">
        <strong>Topics: </strong>
        
        <ul>
          {selectedTopics.map(topic => 
            <li>{topic}</li>
          )}
        </ul>
      </section>
      
      <Button 
        buttonText="Confirm"
        onClick={handleConfirm}
      />
    </div>
  )
}