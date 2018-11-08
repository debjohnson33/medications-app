export default function errorsReducer(state = false, action) {
	switch (action.type) {
		case 'error':
			return true;

		default:
			return state;
	}
}