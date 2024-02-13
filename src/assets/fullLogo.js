import logo from '../assets/logo.jpg'
const FullLogo = ({ textColour = "#000046" }) => {

  return (
<figure style={{}}>
  <img src={logo} 
    alt='Cohort Manager Logo'
    width='100px'
  />
  <h3 style={{ color: "#000046", fontSize: "32px", gridColumn: "2" }}>Cohort Manager</h3>
</figure>

  
  );
};

export default FullLogo;