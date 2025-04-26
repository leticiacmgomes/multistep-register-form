import './RegisterModal.css'

/*Components*/
import { Input } from './Input.jsx'
import { Button } from '../../components/ui/Button.jsx'

import { useDispatch } from 'react-redux'

/*Actions*/
import { setName, setEmail, nextStep } from '../../store/formSlice.jsx'

export const RegisterModal = () => {
  
  const dispatch = useDispatch()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(nextStep())
  }
  
  return(
    <div className="register-modal">
      <h1>Register</h1>
      
      <form onSubmit={handleSubmit}>
        <Input 
          id="name" 
          labelText="Name" 
          type="text" 
          placeholder="Enter your name" 
          onChange={(e) => dispatch(setName(e.target.value))}
        />
        <Input 
          id="email" 
          labelText="Email" 
          type="email" 
          placeholder="example@gmail.com" 
          onChange={(e) => dispatch(setEmail(e.target.value))}
        />
        <Button 
          type="submit" 
          buttonText="Continue"
        />
      </form>
    </div>
  )
}