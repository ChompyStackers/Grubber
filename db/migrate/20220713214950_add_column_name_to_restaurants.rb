class AddColumnNameToRestaurants < ActiveRecord::Migration[7.0]
  def change
    add_column :restaurants, :name, :text
  end
end
