import { useState } from "react";
import Button from "../../components/button";
import TextInput from "../../components/form/textInput";
import useAuth from "../../hooks/useAuth";
import CredentialsCard from "../../components/credentials";
import "./register.css";

const Register = () => {
	const { onRegister } = useAuth();
	const [formData, setFormData] = useState({ email: "", password: "" });

	const onChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handelSubmit = () => {
		const validateEmail = (email) => {
			if (email.length > 254) return false
			
			const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
			return regex.test(email)
		}

		const validatePassword = (password) => {
			const regex = /^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/
			return regex.test(password)
		}

		validateEmail(formData.email) ? console.log('Valid Email') : console.log('Invalid Email')
		validatePassword(formData.password) ? console.log('Valid Password') : console.log('Invalid Password')
		
		//onRegister(formData.email, formData.password)
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
						<TextInput
							value={formData.password}
							onChange={onChange}
							name="password"
							label={"Password *"}
							type={"password"}
						/>
					</form>
					<Button
						text="Sign up"
						onClick={() => handelSubmit()}
						classes="green width-full"
					/>
				</div>
			</CredentialsCard>
		</div>
	);
};

export default Register;
