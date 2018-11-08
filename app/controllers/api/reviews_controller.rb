class Api::ReviewsController < ApplicationController

	before_action :set_medication, only: [:show, :create, :destroy]
	before_action :set_review, only: [:show, :update, :destroy]

	def index
		if (@medication)
			reviews = @medication.reviews
		else 
			reviews = Review.all
		end
		render json: reviews, status: 200
	end

	def create
		@review = @medication.reviews.build(review_params)
		if @review.save
			render json: @review, status: 201
		else
			render_errors_in_json
		end		
	end

	def show
		if @review
			render json: @review, status: 200
		end
	end

	def update
		if @review.update(review_params)
			render json: @review, status: 201
		else
			render_errors_in_json
		end	
	end

	def destroy
		@review.destroy
		:no_content
	end

	private

	def review_params
		params.require(:review).permit(:rating, :comment)
	end

	def set_medication
		@medication = Medication.find_by(id: params[:medication_id])
		if !@medication
			render json: {
				errors: {
					messages: { medication: "can't be found"}
				}
			}, status: 404
		end
	end

	def render_errors_in_json
		render json: { 
			errors: { 
				messages: @review.errors.messages 
			}
		}, status: 422
	end

	def set_review
		@review = @medication.reviews.find_by(id: params[:id])
		if !@review
			render json: {
				errors: {
					messages: { review: "can't be found"}
				}
			}, status: 404
		end		
	end

end
