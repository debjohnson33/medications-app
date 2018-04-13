/*const initialState = {
	medication_id: '',
	rating: '',
	comment: ''
}*/
export default (state = [], action) => {
	switch (action.type) {
		case 'REVIEWS_FETCH_DATA_SUCCESS':
			return action.reviews
		case 'CREATE_REVIEW_SUCCESS':
			return state.concat(action.review)
		
		default:
			return state;
	}
};