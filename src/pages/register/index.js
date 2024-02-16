import { useState } from "react";
import Button from "../../components/button";
import TextInput from "../../components/form/textInput";
import useAuth from "../../hooks/useAuth";
import CredentialsCard from "../../components/credentials";
import "./register.css";

const Register = () => {
  const { onRegister, checkPassword } = useAuth();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="bg-blue register credentialpage">
      <CredentialsCard
        title="Register"
        socialLinksTitle="Or sign up with"
        altButtonTitle="Already a user?"
        altButtonLink="/login"
        altButtonText="Log in"
      >
        <div className="register-form">
          <form>
            <TextInput
              value={formData.email}
              onChange={(event) => onChange(event)}
              type="email"
              name="email"
              label={"Email *"}
            />
            <TextInput
              value={formData.password}
              onChange={onChange}
              name="password"
              label={"Password *"}
              type={"password"}
            />
          </form>
          <p>{checkPassword(formData.password) ? 'Password OK!' : 'Password must contain at least one capital letter, one number and one special character'}</p>
          <Button
            text="Sign up"
            onClick={() => checkPassword(formData.password) ? onRegister(formData.email, formData.password) : false }
            classes="green width-full"
          />
        </div>
      </CredentialsCard>
    </div>
  );
};

export default Register;
