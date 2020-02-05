const initialState = {
	username: '',
	email: '',
	password1: '',
	password2: '',
};

const registerReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'REGISTER_USER':
			return {
				...action.payload,
			};
		default:
			return state;
	}
};

export default registerReducer;
