import { useState } from "react"
import Button from "../../components/button"
import TextInput from "../../components/form/textInput"
import useAuth from "../../hooks/useAuth"
import CredentialsCard from "../../components/credentials"
import "./login.css"

const Login = () => {
  const { onLogin } = useAuth()
  const [formData, setFormData] = useState({ email: "", password: "" })
  const [loginMessage, setLoginMessage] = useState("")

  const onChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const checkLoginErrors = async () => {
    try {
      await onLogin(formData.email, formData.password)
    } catch (error) {
      setLoginMessage(error.message)
    }
  }

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
            <TextInput
              value={formData.email}
              onChange={onChange}
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
          {loginMessage && <p className="input-message">{loginMessage}</p>}
          <Button
            text="Log in"
            onClick={() => {
              checkLoginErrors()
              onLogin(formData.email, formData.password)
            }}
            classes="green width-full"
          />
        </div>
      </CredentialsCard>
    </div>
  )
}

export default Login
