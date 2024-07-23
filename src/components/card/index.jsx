import './style.css'

const Card = ({ children, boxShadow = false, name = "" }) => {
  return (
    <div
      className={`card ${boxShadow && 'card-shadow'} ${name}`}
    >
      {children}
    </div>
  )
}

export default Card
