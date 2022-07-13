class Restaurant < ApplicationRecord
    belongs_to :user
    validates :city, presence: true
end
