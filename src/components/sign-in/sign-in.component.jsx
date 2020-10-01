import React, { useState } from 'react';

import { SignInContainer, SignInTitle, ButtonsBarContainer } from './sign-in.styles';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { useUserState } from '../../provider/utils/user.util';

function SignIn() {
	const { handleSignIn } = useUserState();

	const [ userCredentials, setUserCredentials ] = useState({
		email    : '',
		password : ''
	});

	const { email, password } = userCredentials;

	const handleSubmit = (event) => {
		event.preventDefault();

		handleSignIn({ email, password });
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setUserCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<SignInContainer>
			<SignInTitle>I already have an account</SignInTitle>
			<p>Sign in with your email and password</p>

			<form onSubmit={handleSubmit}>
				<FormInput name="email" type="email" handleChange={handleChange} value={email} label="Email" required />
				<FormInput
					name="password"
					type="password"
					value={password}
					handleChange={handleChange}
					label="Password"
					required
				/>
				<ButtonsBarContainer>
					<CustomButton type="submit"> Sign in </CustomButton>
				</ButtonsBarContainer>
			</form>
		</SignInContainer>
	);
}

export default SignIn;
