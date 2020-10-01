import React from 'react';

import { LoginContainer } from './login.styles';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const Login = () => (
	<LoginContainer>
		<SignIn />
		<SignUp />
	</LoginContainer>
);

export default Login;
