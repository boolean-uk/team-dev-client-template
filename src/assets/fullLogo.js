import logo from '../assets/logo.jpg'
const FullLogo = ({ textColour = "#000046" }) => {

  return (
    <figure style={{ display: "grid", gridTemplateColumns: "auto auto", alignItems: "center", justifyContent: "center", gridColumnGap: "10px" }}>
    <img src={logo} 
      alt='Cohort Manager Logo'
      width='120px'
    />
    <h3 style={{ color: "#000046", fontSize: "32px", gridColumn: "2" }}>Cohort Manager</h3>
  </figure>
  
  );
};

export default FullLogo;