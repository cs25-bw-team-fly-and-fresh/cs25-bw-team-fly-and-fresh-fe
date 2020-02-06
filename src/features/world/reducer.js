const initialState = {
	room: [],
};

const playerReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'UPDATE_ROOM':
			return {
				...action.payload,
			};
		default:
			return state;
	}
};

export default playerReducer;
