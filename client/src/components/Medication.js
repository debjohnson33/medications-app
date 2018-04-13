import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMedications, deleteMedication } from '../actions/medications';
import { fetchReviews } from '../actions/reviews';

import Reviews from './Reviews';
import ReviewForm from './ReviewForm';
import './Medication.css';
import '../containers/medicationsPage.css';

class Medication extends Component {

	componentDidMount() {
		if (this.props.medications.length === 0) {
			this.props.fetchMedications();
		}

	}

	handleOnDelete = event => {
		event.preventDefault();
		const medicationId = this.props.match.params.id;
		this.props.deleteMedication(medicationId);
		this.props.history.push('/medications');
	}

	render() {
		const medicationShow = () => {
			const { medications } = this.props;
			const medicationId = parseInt(this.props.match.params.id, 10);
			const filteredMedication = medications.filter(medication => medication.id === medicationId);
				return filteredMedication.map(medication => {
					return(
						<div key={medication.id} className="row">
						<div key={medication.id} className="col-4" id="medInfo">
							<p>Name: {medication.name}</p>
							<p>Generic Name: {medication.generic_name}</p>
							<p>Uses: {medication.uses}</p>
							<p>Side Effects: {medication.side_effects}</p>
							<p>Precautions: {medication.precautions}</p>
							<div>
							<br /><br />
							</div>
							<button className="med" onClick={this.handleOnDelete}>Delete Medication</button><br /><br />
						</div>
						<div className="col-4" id="reviewForm">
							<p>Add a Review:</p>
							<ReviewForm medication={medication} medication_id={medication.id}/>
						</div>
						<div className="col-4" id="reviews">
							<h3>Reviews:</h3>
							<Reviews medication_id={medicationId} medication={medication} />
						</div>
						</div>
					)
				})
		}

		return (
			<div>
				<h3 className="col-4" id="medHeading">Medication</h3>
				{medicationShow()}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return ({
		medications: state.medications,
		reviews: state.reviews
	});
};

export default connect(mapStateToProps, {fetchMedications, deleteMedication, fetchReviews })(Medication);