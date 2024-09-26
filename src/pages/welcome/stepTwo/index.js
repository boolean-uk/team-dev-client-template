import { useEffect, useState } from "react"
import Form from "../../../components/form"
import TextInput from "../../../components/form/textInput"

const StepTwo = ({ data, setData, setCanProgress, message, setMessage }) => {
  const [isEmailValid, setIsEmailValid] = useState(false)
  const [isPasswordValid, setIsPasswordValid] = useState(false)

  const onInput = (e) => {
    setData(e)
    const inputName = e.target.name
    const inputValue = e.target.value

    if (inputName === "email" && inputValue.includes("@")) {
      if (inputValue.length > 3) {
        setIsEmailValid(true)
      }else {
        setMessage("Enter 3 charachter or more")
      }
    }
    if (inputName === "password") {
      if (inputValue.length > 3) {
        setIsPasswordValid(true)
      }else {
        setMessage("Enter 3 charachter or more")
      }
    }
  }

  useEffect(() => {
    setCanProgress(isEmailValid && isPasswordValid)
  }, [isEmailValid, setCanProgress, isPasswordValid])

  return (
    <>
      <div className="welcome-formheader">
        <h3>Contact Info</h3>
      </div>
      <Form className="welcome-form">
        <div className="welcome-form-inputs">
          <TextInput
            onChange={onInput}
            value={data.email}
            name="email"
            label={"Email*"}
            type="text"
          />
          <TextInput
            onChange={onInput}
            value={data.mobile}
            name="mobile"
            label={"Mobile*"}
            type="text"
          />
          <TextInput
            onChange={onInput}
            value={data.password}
            name="password"
            label={"Password*"}
            type="password"
          />
          {message && <p className="input-message">{message}</p>}
          <p className="text-blue1">*Required</p>
        </div>
      </Form>
    </>
  )
}

export default StepTwo
