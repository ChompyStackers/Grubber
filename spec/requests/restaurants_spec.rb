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
    it "doesn't create a restaurant without a city" do
      restaurant_params = {
        restaurant: {
        # name: 'Grubbers Bar&Grill',
        street: "2986 Ivy Street",
        state: "CA",
        foodtype: "American",
        comment: "Great place to drink and eat", 
        image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60'
        }
      }
      post '/restaurants', params: restaurant_params
      expect(response.status).to eq 422
      json = JSON.parse(response.body)
      expect(json['city']).to include "can't be blank"
    end 
  end
end






