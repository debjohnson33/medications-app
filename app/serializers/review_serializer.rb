class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :medication_id, :rating, :comment
  #belongs_to :medication
end
