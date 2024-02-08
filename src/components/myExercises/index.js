import Card from "../card";
import Button from "../button";
import "./style.css"

const MyExercises = () => {
    return (
        <>
            <Card>
                <h3 className="my-cohort-exercises--header">My Exercises</h3>
                <div>
                    <div className="my-cohort-exercises--stats">
                        <p>Modules:</p> <span>2/7 completed</span>
                        <p>Units:</p> <span>4/10 completed</span>
                        <p>Exercises:</p> <span>34/58 completed</span>
                    </div>
                
                    <div className="my-cohort-exercises--button">
                        <Button text="See Exercises"/>
                    </div>
                </div>
            </Card>
        </>
    );
};

export default MyExercises;