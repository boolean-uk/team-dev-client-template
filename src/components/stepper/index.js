import Steps from "./steps"
import Card from "../card"
import Button from "../button"
import "./style.css"
import { useState } from "react"
import { useTranslation } from "react-i18next"

const Stepper = ({ header, children, onComplete, canProgress, setMessage }) => {
  const {t} = useTranslation()
  const [currentStep, setCurrentStep] = useState(0)

  const onBackClick = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const onNextClick = () => {
    if (!canProgress) {
      setMessage(`${t('requiredFields')}`)
      return
    } else {
      setMessage("")
    }
    if (currentStep === children.length - 1) {
      onComplete()
      return
    }

    setCurrentStep(currentStep + 1)
  }

  return (
    <Card>
      {header}
      <div className="steps-container">
        <Steps maxSteps={children.length} currentStep={currentStep} />
      </div>

      {children[currentStep]}

      <div className="stepper-buttons">
        <Button text={t('back')} classes="offwhite" onClick={onBackClick} />
        <Button
          text={currentStep === children.length - 1 ? `${t('submit')}` : `${t('next')}`}
          classes="blue"
          onClick={onNextClick}
        />
      </div>
    </Card>
  )
}

export default Stepper
