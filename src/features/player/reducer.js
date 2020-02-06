const initialState = {
	position: [400, 200],
	spriteLocation: '0px 0px',
	direction: 's',
	walkIndex: 0,
};

const playerReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'MOVE_PLAYER':
			return {
				...action.payload,
			};
		default:
			return state;
	}
};

export default playerReducer;
