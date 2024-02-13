import logo from '../assets/logo.jpg'
const FullLogo = ({ textColour = "#000046" }) => {

  return (
    <figure>
      <img src={logo} 
      alt='Cohort Manager Logo'
      width='120px'
 
      />
      <h3 style={{color: "#000046",  fontSize: "48px"}}>Cohort Manager</h3>
    </figure>
  );
};

export default FullLogo;