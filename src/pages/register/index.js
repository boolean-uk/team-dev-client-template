import { useState } from 'react';
import Button from '../../components/button';
import TextInput from '../../components/form/textInput';
import useAuth from '../../hooks/useAuth';
import CredentialsCard from '../../components/credentials';
import './register.css';
import { isValidEmail, isValidPassword } from '../../validation/validation';

const Register = () => {
  const { onRegister } = useAuth();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = (email, password) => {
    const emailValid = isValidEmail(email);
    const passwordValid = isValidPassword(password);

    setEmailError(!emailValid);
    setPasswordError(!passwordValid);

    if (!emailValid) {
      alert('Invalid email address.');
    }

    if (!passwordValid) {
      alert(
        'Invalid password. It must be at least 8 characters long, contain at least one uppercase letter, one number, and one special character.'
      );
    }

    if (emailValid && passwordValid) {
      onRegister(email, password);
    }
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
              style={{ borderColor: emailError ? 'red' : '' }}
            />
            <TextInput
              value={formData.password}
              onChange={onChange}
              name="password"
              label={'Password *'}
              type={'password'}
              style={{ borderColor: passwordError ? 'red' : '' }}
            />
          </form>
          <Button
            text="Sign up"
            onClick={() => handleRegister(formData.email, formData.password)}
            classes="green width-full"
          />
        </div>
      </CredentialsCard>
    </div>
  );
};

export default Register;
