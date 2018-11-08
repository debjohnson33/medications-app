class Review < ApplicationRecord
	belongs_to :medication
	validates :rating, :comment, presence: true
	validates :rating, inclusion: { in: 0..5 }
end
