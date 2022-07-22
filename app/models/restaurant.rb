class Restaurant < ApplicationRecord
    belongs_to :user
    validates :name, :street, :city, :state, :foodtype, :comment, :image, :user_id, presence: true
    validates :name, :street, :city, :foodtype,length: {minimum: 3}
    validates :state, length: {minimum: 2}
    validates :image, length: {minimum: 8}
end
