export const updateMedicationFormData = medicationFormData => {
	return {
		type: 'UPDATED_DATA',
		medicationFormData
	}
}

export const resetMedicationForm = () => {
	return {
		type: 'RESET_MEDICATION_FORM'
	}
}