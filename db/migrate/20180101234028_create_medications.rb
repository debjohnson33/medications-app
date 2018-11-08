class CreateMedications < ActiveRecord::Migration[5.1]
  def change
    create_table :medications do |t|
      t.string :name
      t.string :generic_name
      t.text :uses
      t.text :side_effects
      t.text :precautions

      t.timestamps
    end
  end
end
