import { useState, useEffect } from "react"
import ProfileIcon from "../../../assets/icons/profileIcon"
import Form from "../../../components/form"
import TextInput from "../../../components/form/textInput"
import { useTranslation } from "react-i18next"

const StepOne = ({ data, setData, setCanProgress, message, setMessage }) => {
  const { t } = useTranslation()
  const [firstNameValid, setFirstNameValid] = useState(false)
  const [lastNameValid, setLastNameValid] = useState(false)
  const [userNameValid, setUserNameValid] = useState(false)

  const onInput = (e) => {
    setData(e)
    const inputName = e.target.name
    const inputValue = e.target.value

    if (inputName === "firstName") {
      if (inputValue.length > 3) {
        setFirstNameValid(true)
      } else {
        setMessage(t("enterThreeCharacters"))
      }
    }
    if (inputName === "lastName") {
      if (inputValue.length > 3) {
        setLastNameValid(true)
      } else {
        setMessage(t("enterThreeCharacters"))
      }
    }
    if (inputName === "githubUsername") {
      if (inputValue.length > 3) {
        setUserNameValid(true)
      } else {
        setMessage(t("enterThreeCharacters"))
      }
    }
  }

  useEffect(() => {
    setCanProgress(firstNameValid && lastNameValid)
  }, [firstNameValid, setCanProgress, lastNameValid, userNameValid])

  return (
    <>
      <div className="welcome-formheader">
        <h3>{t("basicInfo")}</h3>
      </div>
      <Form className="welcome-form">
        <div className="welcome-form-profileimg">
          <p className="text-blue1">{t("photo")}</p>
          <div className="welcome-form-profileimg-input">
            <ProfileIcon colour="#28C846" background="#64DC78" />

            <p className="text-blue1">{t("addHeadShot")}</p>
          </div>
          <p className="welcome-form-profileimg-error">
            {t("uploadValidImage")}
          </p>
        </div>
        <div className="welcome-form-inputs">
          <TextInput
            onChange={onInput}
            value={data.firstName}
            name="firstName"
            label={`${t("firstName")} *`}
            placeholder={`${t("enterYourFirstName")} *`}
            required
          />
          <TextInput
            onChange={onInput}
            value={data.lastName}
            name="lastName"
            label={`${t("lastName")} *`}
            placeholder={`${t("enterYourLastName")} *`}
            required
          />
          <TextInput
            onChange={onInput}
            value={data.githubUsername}
            name="githubUsername"
            label={`${t("githubUserName")} *`}
            placeholder={`${t("enterYourGithubUser")} *`}
            required
          />
          {message && <p className="input-message">{message}</p>}
          <p className="text-blue1">{`*${t("required")}`}</p>
        </div>
      </Form>
    </>
  )
}

export default StepOne
