import './Button.css'

export const Button = ({ type, buttonText, onClick}) => {
  return(
    <button type={type} onClick={onClick}>{buttonText}</button>
  )
}