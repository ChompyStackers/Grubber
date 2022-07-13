require 'rails_helper'

RSpec.describe "Restaurants", type: :request do
  user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')
  describe "GET /index" do
   it "gets a list of restaurants" do 

    user.restaurants.create(
      street: '123 street',
      city: 'Chicago',
      state: 'illinois',
      foodtype: 'FastFood',
      comment: 'ok 2/5',
      image: 'https://mcdonalds.com',
      name:"McDonald's",
    )
    get '/restaurants'
    restaurants = JSON.parse(response.body)
    expect(response).to have_http_status(200)
    expect(restaurants.length).to eq(1)
   end
  end
end
