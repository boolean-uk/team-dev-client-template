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
  const [passwordIsValid, setPassordIsValid] = useState(false);

  const isValidEmail = () => {
    // validates abc@de.fh as email. must be 3 characters on both sides of @ and no trailing dot
    const validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailIsValid(validRegex.test(formData.email));
    console.log('Valid: ', validRegex.test(formData.email), '. Email: ', formData.email);
    return validRegex.test(formData.email);
  };

  const isValidPassword = () => {
    /* The password should not be less than 8 characters in length
The password should contain at least one uppercase character
The password should contain at least one number
The password should contain at least one special character
*/
    const validRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    setPassordIsValid(validRegex.test(formData.password));
    console.log(
      'Password Valid: ',
      validRegex.test(formData.password),
      '. Password: ',
      formData.password
    );
    return validRegex.test(formData.password);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    isValidEmail(formData.email);
    isValidPassword(formData.password);
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
            disabled={!emailIsValid && !passwordIsValid}
          />
        </div>
      </CredentialsCard>
    </div>
  );
};

export default Login;
