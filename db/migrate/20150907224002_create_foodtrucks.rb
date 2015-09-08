class CreateFoodtrucks < ActiveRecord::Migration
  def change
    create_table :foodtrucks do |t|

      t.timestamps null: false
    end
  end
end
