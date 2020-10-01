import React from 'react';

import { Dimmer, SpinnerContainer } from './spinner.styles';

import { useUserState } from '../../provider/utils/user.util';

function Spinner() {
	const { state: { loading } } = useUserState();

	return (
		<Dimmer show={loading}>
			<SpinnerContainer />
		</Dimmer>
	);
}

export default Spinner;
