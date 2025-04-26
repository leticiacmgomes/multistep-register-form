import './Input.css'

export const Input = ({ id, labelText, type, placeholder, onChange }) => {
  return(
    <div className="input-container">
      <label for={id}>{labelText}</label>
      <input 
        id={id} 
        type={type} 
        placeholder={placeholder} 
        onChange={onChange} 
        required
      />
    </div>
  )
}