const initialState = {
	medication_id: '',
	rating: '',
	comment: '',
}
export default (state = initialState, action) => {

	switch(action.type) {
		case 'UPDATED_REVIEW_DATA':
			return action.reviewFormData
		case 'RESET_REVIEW_FORM':
			return initialState;
		default:
			return state;
	}
}