require 'rails_helper'

RSpec.describe Restaurant, type: :model do
  user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')
  describe 'presence' do
      it 'validates precense of name' do
          restaurant =user.restaurants.create(
                    name: "",
                    street:"123 street",
                    city: "Chicago",
                    state: "Illinois",
                    comment: "hello",
                    foodtype: "chinese",
                    image: "www.urlhelper.com"
          )
          p restaurant.errors[:name]
          expect(restaurant.errors[:name]).to_not be_empty
      end
  end
end


