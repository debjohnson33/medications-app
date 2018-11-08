import fetch from 'isomorphic-fetch';
import { resetMedicationForm } from './medicationForm';
import { handleErrors } from './reviews';

const API_URL = process.env.REACT_APP_API_URL;

export const medicationsFetchDataSuccess = medications => {
	return {
		type: 'MEDICATIONS_FETCH_DATA_SUCCESS',
		medications
	}
}

export const addMedication = medication => {
	return {
		type: 'ADD_MEDICATION_SUCCESS',
		medication: medication
	}
}

export const destroyMedication = medicationId => {
	return {
		type: 'DELETE_MEDICATION_SUCCESS',
		medicationId
	}
}

export const fetchMedications = () => {
	return dispatch => {
		return fetch(`${API_URL}/medications`)
			.then(response => response.json())
			.then(medications => {
				dispatch(medicationsFetchDataSuccess(medications));
			})
			.catch(error => console.log(error));
	};
};

export const createMedication = (medication) => {
	return dispatch => {
		return fetch(`${API_URL}/medications`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ medication: medication })
		})
			.then(handleErrors)
			.then(response => response.json())
			.then(medication => {
				dispatch(addMedication(medication))
				dispatch(resetMedicationForm())
				//history.push('/medications')
			})
			.catch(error => {
				dispatch({type: 'error'})
			})
	}	
}

export const deleteMedication = (medicationId) => {
	return dispatch => {
		return fetch(`${API_URL}/medications/${medicationId}`, {
			method: 'DELETE',
		})
			.then(response => response.json())
			.then(medication => {
				dispatch(destroyMedication(medicationId))
			})
			.catch(error => console.log(error))
	}
}
