class CreateRestaurants < ActiveRecord::Migration[7.0]
  def change
    create_table :restaurants do |t|
      t.text :street
      t.text :city
      t.text :state
      t.text :foodtype
      t.text :comment
      t.text :image
      t.integer :user_id

      t.timestamps
    end
  end
end
