import Card from "../card";
import Button from "../button";
import "./style.css"
import { useTranslation } from "react-i18next";

const MyExercises = () => {
    const {t} = useTranslation()

    return (
        <>
            <Card>
                <h3 className="my-cohort-exercises--header">My Exercises</h3>
                <div>
                    <div className="my-cohort-exercises--stats">
                        <p>{t("modules")}:</p> <span>2/7 {t("completed")}</span>
                        <p>{t("units")}:</p> <span>4/10 {t("completed")}</span>
                        <p>{t("exercises")}:</p> <span>34/58 {t("completed")}</span>
                    </div>
                
                    <div className="my-cohort-exercises--button">
                        <Button text={t("seeExercises")}/>
                    </div>
                </div>
            </Card>
        </>
    );
};

export default MyExercises;