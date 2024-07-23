import './style.css'

const Card = ({ children, boxShadow = false, cohorts = false }) => {
  return (
    <div
      className={`card ${boxShadow && 'card-shadow'} ${cohorts && 'cohorts'}`}
    >
      {children}
    </div>
  )
}

export default Card
