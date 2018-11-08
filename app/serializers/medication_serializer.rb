class MedicationSerializer < ActiveModel::Serializer
  attributes :id, :name, :generic_name, :uses, :side_effects, :precautions
  #has_many :reviews
end
