import './Topic.css'

export const Topic = ({ isSelected, topic, onClick }) => {
  return (
    <button className={`${isSelected ? 'selected' : ''} topic`} onClick={onClick}>{topic}</button>
  )
}