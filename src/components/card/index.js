import "./style.css"

const Card = ({ children, boxShadow = false, header = null }) => {
  return (
    <>
      <div className={`card ${boxShadow && "card-shadow"}`}>
        {header && <h4>{header}</h4>}
        {children}
      </div>
    </>
  )
}

export default Card
