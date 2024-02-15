import { useState, useEffect } from "react"
import Form from "../../../components/form"
import TextInput from "../../../components/form/textInput"

const StepOne = ({ data, setData, setCanProgress, message, setMessage }) => {
  const [firstNameValid, setFirstNameValid] = useState(false)
  const [lastNameValid, setLastNameValid] = useState(false)
  const [userNameValid, setUserNameValid] = useState(false)

  const onInput = (e) => {
    setData(e)
    const inputName = e.target.name
    const inputValue = e.target.value
    console.log(inputValue)

    if (inputName === "firstName") {
      if (inputValue.length > 3) {
        setFirstNameValid(true)
      } else {
        setMessage("Enter 3 charachter or more")
      }
    }
    if (inputName === "lastName") {
      if (inputValue.length > 3) {
        setLastNameValid(true)
      } else {
        setMessage("Enter 3 charachter or more")
      }
    }
    if (inputName === "githubUsername") {
      if (inputValue.length > 3) {
        setUserNameValid(true)
      } else {
        setMessage("Enter 3 charachter or more")
      }
    }
  }

  useEffect(() => {
    setCanProgress(firstNameValid && lastNameValid)
  }, [firstNameValid, setCanProgress, lastNameValid, userNameValid])

  return (
    <>
      <div className="welcome-formheader">
        <h3>Basic info</h3>
      </div>
      <Form className="welcome-form">
        <div className="welcome-form-inputs">
          <TextInput
            onChange={onInput}
            value={data.imageUrl}
            name="imageUrl"
            label={"Profile image URL"}
            placeholder="enter your profile image URL"
           />
          <TextInput
            onChange={onInput}
            value={data.firstName}
            name="firstName"
            label={"First name*"}
            placeholder="enter your first name"
            required
          />
          <TextInput
            onChange={onInput}
            value={data.lastName}
            name="lastName"
            label={"Last name*"}
            placeholder="enter your last name"
            required
          />
          <TextInput
            onChange={onInput}
            value={data.githubUsername}
            name="githubUsername"
            label={"Github Username*"}
            placeholder="enter your github user name"
            required
          />
          {message && <p className="input-message">{message}</p>}
          <p className="text-blue1">*Required</p>
        </div>
      </Form>
    </>
  )
}

export default StepOne
