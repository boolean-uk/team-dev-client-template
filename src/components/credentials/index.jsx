import FullLogo from "../../assets/fullLogo";
import { NavLink } from "react-router-dom";
import SocialLinks from "../socialLinks";
import "./credentials.css";
import Card from "../card";

const CredentialsCard = ({
  title,
  socialLinksTitle,
  altButtonTitle,
  altButtonLink,
  altButtonText,
  setError,
  children,
}) => {
  return (
    <div className="credentials">
      <Card boxShadow={true}>
        <div className="credentials-logo">
          <FullLogo />
        </div>
        <h1 className="credentials-title h3">{title && title}</h1>
        {children}
        <div className="credentials-sociallinks">
          <p>{socialLinksTitle && socialLinksTitle}</p>
          <div className="credentials-sociallinks-links">
            <SocialLinks />
          </div>
        </div>
        <div className="credentials-altbutton">
          <p>{altButtonTitle && altButtonTitle}</p>
          <NavLink
            to={altButtonLink}
            className="button offwhite"
            onClick={() => setError("")}
          >
            {altButtonText}
          </NavLink>
        </div>
      </Card>
    </div>
  );
};

export default CredentialsCard;
