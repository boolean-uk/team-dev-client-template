import { useState } from 'react';
import Button from '../../components/button';
import TextInput from '../../components/form/textInput';
import useAuth from '../../hooks/useAuth';
import CredentialsCard from '../../components/credentials';
import './login.css';

const Login = () => {
  const { onLogin } = useAuth();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [emailIsValid, setEmailIsValid] = useState(false);

  const isValidEmail = () => {
    // validates abc@de.f as email. must be 3 characters on both sides of @
    const validRegex = /^[a-zA-Z]{3,}@[a-zA-Z.]{3,}$/;
    setEmailIsValid(validRegex.test(formData.email));
    console.log('emailIsValid', validRegex.test(formData.email));
    return validRegex.test(formData.email);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    isValidEmail(formData.email);
  };

  return (
    <div className="bg-blue login credentialpage">
      <CredentialsCard
        title="Login"
        socialLinksTitle="Or log in with"
        altButtonTitle="Need an account?"
        altButtonLink="/register"
        altButtonText="Sign up"
      >
        <div className="login-form">
          <form>
            <TextInput value={formData.email} onChange={onChange} name="email" label={'Email *'} />
            <TextInput
              value={formData.password}
              onChange={onChange}
              name="password"
              label={'Password *'}
              type={'password'}
            />
          </form>
          <Button
            text="Log in"
            onClick={() => onLogin(formData.email, formData.password)}
            classes="green width-full"
            disabled={!emailIsValid}
          />
        </div>
      </CredentialsCard>
    </div>
  );
};

export default Login;
