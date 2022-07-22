class UpdateRestaurantTableToMatchYelp < ActiveRecord::Migration[7.0]
  def change
    remove_column :restaurants, :street
    remove_column :restaurants, :city
    remove_column :restaurants, :state
    remove_column :restaurants, :foodtype
    remove_column :restaurants, :comment
    remove_column :restaurants, :image
    add_column :restaurants, :alias, :string
    add_column :restaurants, :categories, :text, object: true, default: {}
    add_column :restaurants, :coordinates?
    add_column :restaurants, :display_phone, :string
    add_column :restaurants, :distance, :decimal
    add_column :restaurants, :id, :string
    add_column :restaurants, :image_url, :string
    add_column :restaurants, :alias, :string
    add_column :restaurants, :is_closed, :boolean
    add_column :restaurants, :alias, :string
    add_column :restaurants, :location, :text, object: true, default:{}
    add_column :restaurants, :alias, :string
    add_column :restaurants, :phone, :string
    add_column :restaurants, :price, :string
    add_column :restaurants, :rating, :decimal
    add_column :restaurants, :review_count, :integer
    add_column :restaurants, :transactions, :text, array: true, default: []
  end
end