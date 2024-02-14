import Card from "../card"
import Button from "../button"
import "./style.css"
import { useTranslation } from "react-i18next"
import { Trans } from "react-i18next"

const MyExercises = () => {
  const { t } = useTranslation()

  return (
    <>
      <Card>
        <h3 className="my-cohort-exercises--header">My Exercises</h3>
        <div>
          <div className="my-cohort-exercises--stats">
          {/* countAndCompleted will need to remain as its a key for the translation. Values for objects can be changed. */}
              <p>{t("modules")}:</p><span><Trans values={{completedTasks: '2', totalTasks: '7'}}>countAndCompleted</Trans></span>
              <p>{t("units")}:</p> <span><Trans values={{completedTasks: '4', totalTasks: '10'}}>countAndCompleted</Trans></span>
              <p>{t("exercises")}:</p> <span><Trans values={{completedTasks: '34', totalTasks: '58'}}>countAndCompleted</Trans></span>

          </div>

          <div className="my-cohort-exercises--button">
            <Button text={t("seeExercises")} />
          </div>
        </div>
      </Card>
    </>
  )
}

export default MyExercises
