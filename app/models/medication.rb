class Medication < ApplicationRecord
	has_many :reviews, dependent: :destroy
	validates :name, :generic_name, :uses, :side_effects, :precautions, presence: true
end
