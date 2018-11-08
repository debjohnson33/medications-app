class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.belongs_to :medication
      t.integer :rating
      t.text :comment

      t.timestamps
    end
  end
end
