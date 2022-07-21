class Restaurant < ApplicationRecord
    belongs_to :user
    validates :name, :street, :city, :state, :foodtype, :comment, :image, :user_id, presence: true
    validates :name, :street, :city, :foodtype, :comment, length: {minimum: 3}
    validates :state, length: {minimum: 2}
    validates :image, length: {minimum: 8}
    validates :name, length: {maximum: 100}
    validates :street, :city, :foodtype, length: {maximum: 20}
    validates :state, length: {maximum: 15}
    validates :comment, :image, length: {maximum: 250}
end
