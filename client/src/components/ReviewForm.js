import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateReviewFormData } from '../actions/reviewForm';
import { createReview } from '../actions/reviews';
import FormError from './FormError';
import './Medication.css';

class ReviewForm extends Component {

	handleOnChange = event => {
		const { name, value } = event.target;
		const currentReviewFormData = Object.assign({}, this.props.reviewFormData, {
			[name]: value
		})
		this.props.updateReviewFormData(currentReviewFormData)
	}

	handleOnSubmit = event => {
		event.preventDefault();
		const medication_id = this.props.medication_id;
		const currentReviewFormData = Object.assign({}, this.props.reviewFormData, {
			medication_id: medication_id,
			rating: this.props.reviewFormData.rating,
			comment: this.props.reviewFormData.comment
		})
		this.props.createReview(currentReviewFormData, medication_id)
	}
	
	render() {

		const { rating, comment } = this.props.reviewFormData;

		return (
			<div>
				{this.props.errors === true ? <FormError /> : null}
				<form onSubmit={this.handleOnSubmit} >
					<label htmlFor='rating'>Rating (1 lowest, 5 highest):</label>
				    <input 
				    	type='text' 
				    	name='rating' 
				    	value={rating} 
				    	onChange={this.handleOnChange}
				    	placeholder='Rating between 1 and 5'
				    />    					
					<br /><br />
					<label htmlFor='Comment'>Comment:</label><br />
					<textarea
						rows='4'
						columns='70'
						name='comment' 
						value={comment} 
						onChange={this.handleOnChange}
						placeholder='comment'>
					</textarea>
						<br /><br />
					
					<button type="submit" className="med" >Submit Review</button>
				</form>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		reviewFormData: state.reviewFormData,
		errors: state.errors
	}
}
 
export default connect(mapStateToProps, {
	updateReviewFormData,
	createReview
})(ReviewForm);