class Restaurant < ApplicationRecord
    belongs_to :user
    validates :name, :street, :city, :state, :foodtype, :comment, :image, :user_id, presence: true
end
