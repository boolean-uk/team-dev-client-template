import logo from '../assets/logo.jpg'
const FullLogo = ({ textColour = "#000046", display= 'block' }) => {

  return (
<figure style={{}}>
<img 
        src={logo} 
        alt='Cohort Manager Logo'
        style={{
          width: '80px'
        }}
      />
  <h3 style={{ color: textColour, fontSize: "32px", display: display}}>Cohort Manager</h3>
</figure>

  
  );
};

export default FullLogo;
