import { useState } from "react";
import Button from "../../components/button";
import TextInput from "../../components/form/textInput";
import useAuth from "../../hooks/useAuth";
import CredentialsCard from "../../components/credentials";
import "./register.css";

const Register = () => {
	const { onRegister } = useAuth();
	const [formData, setFormData] = useState({ email: "", password: "" });
	const [isEmailValid, setIsEmailValid] = useState(null)
	const [isPasswordValid, setIsPasswordValid] = useState(null)

	const onChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handelSubmit = (e) => {
		e.preventDefault()
		const validateEmail = (email) => {
			if (email.length > 254) return false
			
			const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
			return regex.test(email)
		}

		const validatePassword = (password) => {
			const regex = /^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/
			return regex.test(password)
		}

		validateEmail(formData.email) ? setIsEmailValid(true) : setIsEmailValid(false)
		validatePassword(formData.password) ? setIsPasswordValid(true) : setIsPasswordValid(false)
		
		console.log('email', formData.email, 'password', formData.password)
		if (isEmailValid && isPasswordValid) onRegister(formData.email, formData.password)
	}

	return (
		<div className="bg-blue register credentialpage">
			<CredentialsCard
				title="Register"
				socialLinksTitle="Or sign up with"
				altButtonTitle="Already a user?"
				altButtonLink="/login"
				altButtonText="Log in"
			>
				<div className="register-form">
					<form>
						<TextInput
							value={formData.email}
							onChange={onChange}
                            type="email"
							name="email"
							label={"Email *"}
						/>
						{isEmailValid === false && 
							<p className="error-message">
								Please enter a valid Email e.g: <span className="example">example@email.com</span>
							</p>
						}
						<TextInput
							value={formData.password}
							onChange={onChange}
							name="password"
							label={"Password *"}
							type={"password"}
						/>
						{isPasswordValid === false &&
							<p className="error-message">
								Password must contain at least one uppercase letter, one number, one special character and be at least 8 characters long.
							</p>
						}
					</form>
					<Button
						text="Sign up"
						onClick={(e) => handelSubmit(e)}
						classes="green width-full"
					/>
				</div>
			</CredentialsCard>
		</div>
	);
};

export default Register;
