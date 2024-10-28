import { useState } from 'react';
import Button from '../../components/button';
import TextInput from '../../components/form/textInput';
import useAuth from '../../hooks/useAuth';
import CredentialsCard from '../../components/credentials';
import './register.css';

const Register = () => {
  const { onRegister } = useAuth();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [emailIsValid, setEmailIsValid] = useState(false);

  const isValidEmail = () => {
    // validates abc@de.fh as email. must be 3 characters on both sides of @ and no trailing dot const validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailIsValid(validRegex.test(formData.email));
    console.log('Valid: ', validRegex.test(formData.email), '. Email: ', formData.email);
    return validRegex.test(formData.email);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    isValidEmail(formData.email);
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
              onChange={onChange}
              type="email"
              name="email"
              label={'Email *'}
            />
            <TextInput
              value={formData.password}
              onChange={onChange}
              name="password"
              label={'Password *'}
              type={'password'}
            />
          </form>
          <Button
            text="Sign up"
            onClick={() => onRegister(formData.email, formData.password)}
            disabled={!emailIsValid}
            classes="green width-full"
          />
        </div>
      </CredentialsCard>
    </div>
  );
};

export default Register;
