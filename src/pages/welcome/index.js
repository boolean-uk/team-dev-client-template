import { useState, useEffect } from "react";
import Stepper from "../../components/stepper";
import useAuth from "../../hooks/useAuth";
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import "./style.css";

const Welcome = () => {
	const { onCreateProfile } = useAuth();
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
    
	const [profile, setProfile] = useState({
		firstName: "",
		lastName: "",
		githubUsername: "",
		bio: "",
	});


    useEffect(() => {
        
        if(profile.firstName.length > 0 && profile.lastName.length > 0) {
            console.log("should be false")
            setNextBtnDisabled(false)
        } else {
            setNextBtnDisabled(true)
        }
        
    }, [profile])

	const onChange = (event) => {
        
        const { name, value } = event.target;
        
		setProfile({
            ...profile,
			[name]: value,
		});
        
	};

	const onComplete = () => {

        onCreateProfile(profile.firstName, profile.lastName, profile.githubUsername, profile.bio);

	};

	return (
		<main className="welcome">
			<div className="welcome-titleblock">
				<h1 className="h2">Welcome to Cohort Manager</h1>
				<p className="text-blue1">Create your profile to get started</p>
			</div>

			<Stepper header={<WelcomeHeader />} nextBtnDisabled={nextBtnDisabled} onComplete={onComplete}>
				<StepOne data={profile} setData={onChange} />
				<StepTwo data={profile} setData={onChange} />
			</Stepper>
		</main>
	);
};

const WelcomeHeader = () => {
	return (
		<div className="welcome-cardheader">
			<h2>Create profile</h2>
			<p className="text-blue1">
				Tell us about yourself to create your profile
			</p>
		</div>
	);
};

export default Welcome;
