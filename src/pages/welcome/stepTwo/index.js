import { useEffect, useState } from "react"
import Form from "../../../components/form"
import TextInput from "../../../components/form/textInput"

const StepTwo = ({ data, setData, setCanProgress, canProgress }) => {
  const [ isEmailValid, setIsEmailValid ] = useState(false)
  const [ isPaswordValid, setIsPasswordValid ] = useState(false)


  const onInput = (e) => {
    setData(e)
    const inputName = e.target.name
    const inputValue = e.target.value

    if (inputName === "email") {
      if (inputValue.length > 1) {
        setIsEmailValid(true)
      }
    }
    if (inputName === "password") {
      if (inputValue.length > 1) {
        setIsPasswordValid(true)
      }
    }
  }

  useEffect(() => {
    setCanProgress(isEmailValid && isPaswordValid)
  }, [isEmailValid, setCanProgress, isPaswordValid])

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
          <p className="text-blue1">*Required</p>
        </div>
      </Form>
    </>
  )
}

export default StepTwo
