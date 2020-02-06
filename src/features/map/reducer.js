const initialState = {
	tiles: [],
	// isPlaying: false,
};

const mapReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_TILES':
			return {
				...action.payload,
			};
		case 'START_PLAYING':
			return {
				...action.payload,
			};
		default:
			return state;
	}
};

export default mapReducer;
