import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchReviews } from '../actions/reviews';
	
class Reviews extends Component {
	componentDidMount() {
		this.props.fetchReviews();
	}

	render() {
		const { medication, reviews } = this.props;
		const filteredReviews = reviews.filter(review => medication.id === review.medication_id);

		return(
			<div>
				{filteredReviews.map(review => 
					<div key={review.id}>
						<h4>Review:</h4>
						<p>Rating: {review.rating}</p>
						<p>Comment: {review.comment}</p>
					</div>
				)}
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

export default connect(mapStateToProps, { fetchReviews })(Reviews);	