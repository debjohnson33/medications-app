const initialState = {
	name: '',
	generic_name: '',
	uses: '',
	side_effects: '',
	precautions: ''
}
export default (state = initialState, action) => {

	switch(action.type) {
		case 'UPDATED_DATA':
			return action.medicationFormData
		case 'RESET_MEDICATION_FORM':
			return initialState;
		default:
			return state;
	}
}