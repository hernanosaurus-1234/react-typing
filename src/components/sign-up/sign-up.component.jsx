import React, { useState } from 'react';

import { SignUpContainer, SignUpTitle } from './sign-up.styles';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { useUserState } from '../../provider/utils/user.util';

function SignUp() {
	const { handleSignUp } = useUserState();

	const [ userCredentials, setUserCredentials ] = useState({
		displayName     : '',
		email           : '',
		password        : '',
		confirmPassword : ''
	});

	const { displayName, email, password, confirmPassword } = userCredentials;

	const handleSubmit = (event) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert("passwords don't match");
			return;
		}

		handleSignUp({ displayName, email, password });
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setUserCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<SignUpContainer>
			<SignUpTitle>I do not have a account</SignUpTitle>
			<p>Sign up with your email and password</p>
			<form className="sign-up-form" onSubmit={handleSubmit}>
				<FormInput
					type="text"
					name="displayName"
					value={displayName}
					onChange={handleChange}
					label="Display Name"
					required
				/>
				<FormInput type="email" name="email" value={email} onChange={handleChange} label="Email" required />
				<FormInput
					type="password"
					name="password"
					value={password}
					onChange={handleChange}
					label="Password"
					required
				/>
				<FormInput
					type="password"
					name="confirmPassword"
					value={confirmPassword}
					onChange={handleChange}
					label="Confirm Password"
					required
				/>
				<CustomButton type="submit">SIGN UP</CustomButton>
			</form>
		</SignUpContainer>
	);
}

export default SignUp;
