import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateMedicationFormData } from '../actions/medicationForm';
import { createMedication } from '../actions/medications';
import FormError from './FormError';
import './Medication.css';

class MedicationForm extends Component {

	handleOnChange = event => {
		const { name, value } = event.target;
		const currentMedicationFormData = Object.assign({}, this.props.medicationFormData, {
			[name]: value
		})
		this.props.updateMedicationFormData(currentMedicationFormData)
	}

	handleOnSubmit = event => {
		event.preventDefault();
		this.props.createMedication(this.props.medicationFormData);
	}

	render() {

		const { name, generic_name, uses, side_effects, precautions } = this.props.medicationFormData;
		
		return (
			<div>
			{this.props.errors === true ? <FormError /> : null}
			<h4>Add a Medication to the List</h4>
			<form onSubmit={this.handleOnSubmit}>
				<div>
					<label htmlFor='name'>Name:</label>
					<input 
						type='text'
						onChange={this.handleOnChange}
						name='name' 
						value={name} 
						placeholder='Medication Name'
					/>
				</div>
				<br />
				<div>
					<label htmlFor='generic_name'>Generic Name:</label>
					<input 
						type='text' 
						onChange={this.handleOnChange}
						name='generic_name'
						value={generic_name} 
						placeholder='Generic Name'
					/>
				</div>
				<br />
				<div>
					<label htmlFor='uses'>Uses:</label><br />
					<textarea
						rows='4'
						columns='70' 
						onChange={this.handleOnChange}
						name='uses'
						value={uses} 
						placeholder='Uses'>
					</textarea>
				</div>
				<br />
				<div>
					<label htmlFor='side_effects'>Side Effects:</label><br/>
					<textarea
						rows='4'
						columns='70'
						onChange={this.handleOnChange} 
						name='side_effects'
						value={side_effects} 
						placeholder='Side Effects'>
					</textarea>
				</div>
				<br />
				<div>
					<label htmlFor='precautions'>Precautions:</label><br />
					<textarea
						rows='4'
						columns='70' 
						onChange={this.handleOnChange}
						name='precautions'
						value={precautions} 
						placeholder='Precautions'>
					</textarea>
				</div>
				<button type="submit" className="med" >Add Medication</button>
			</form>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		medicationFormData: state.medicationFormData,
		errors: state.errors
	}
}
 
export default connect(mapStateToProps, {
	updateMedicationFormData, 
	createMedication
})(MedicationForm);