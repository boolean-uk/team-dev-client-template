import { useState } from "react";
import Button from "../../components/button";
import TextInput from "../../components/form/textInput";
import useAuth from "../../hooks/useAuth";
import CredentialsCard from "../../components/credentials";
import "./register.css";
import { useTranslation } from "react-i18next";

const Register = () => {
  const { onRegister } = useAuth();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { t } = useTranslation()

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="bg-blue register credentialpage">
      <CredentialsCard
        title={t("register")}
        socialLinksTitle={t("signUpAlternative")}
        altButtonTitle={t("userExist")}
        altButtonLink="/login"
        altButtonText={t("logIn")}
      >
        <div className="register-form">
          <form>
            <TextInput
              value={formData.email}
              onChange={onChange}
              type="email"
              name="email"
              label={`${t('email')} *`}
            />
            <TextInput
              value={formData.password}
              onChange={onChange}
              name="password"
              label={`${t('password')} *`}
            type={"password"}
            />
          </form>
          <Button
            text={t('signUp')}
            onClick={() => onRegister(formData.email, formData.password)}
            classes="green width-full"
          />
        </div>
      </CredentialsCard>
    </div>
  );
};

export default Register;
