class CreateFoodtrucks < ActiveRecord::Migration
  def change
    create_table :foodtrucks do |t|
      t.string :name
      t.string :address
      t.integer :longitude
      t.integer :latitude
      t.string :description

      t.timestamps null: false
    end
  end
end
