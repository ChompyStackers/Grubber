require 'rails_helper'

RSpec.describe "Restaurants", type: :request do

user = User.where(email: 'testing@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')

  describe "GET /index" do
    it "gets a list of restaurants" do 

      Restaurant.create(
      street: '123 street',
      city: 'Chicago',
      state: 'illinois',
      foodtype: 'FastFood',
      comment: 'ok 2/5',
      image: 'https://mcdonalds.com',
      name:"McDonald's",
      user_id: user.id
    )
    get '/restaurants'
    restaurants = JSON.parse(response.body)
    expect(response).to have_http_status(200)
    expect(restaurants.length).to eq(1)
   end
  end
   describe "POST /create" do
    it "creates a restaurant" do

      restaurant = {
        restaurant:{
        name: 'Grubbers Bar&Grill',
        street: "2986 Ivy Street",
        city: 'Chicago',
        state: "CA",
        foodtype: "American",
        comment: "Great place to drink and eat", 
        image: 'hello',
        user_id: user.id
        }
      }
      post '/restaurants', params: restaurant
      expect(response).to have_http_status(200)
      restaurant= Restaurant.first 
      expect(restaurant.state).to eq "CA"
    end
    it "does not allow a restaurant without a name" do

      restaurant = {
        restaurant:{
        name: "",
        street: "2986 Ivy Street",
        city: 'Chicago',
        state: "CA",
        foodtype: "American",
        comment: "Great place to drink and eat", 
        image: 'hello',
        user_id: user.id
        }
      }
      post '/restaurants', params: restaurant
      expect(response).to have_http_status(422)
      restaurant= JSON.parse(response.body) 
      expect(restaurant['name']).to include "can't be blank"
    end
    it "does not allow a restaurant without a street" do

      restaurant = {
        restaurant:{
        name: "Grubbers Bar&Grill",
        street: "",
        city: 'Chicago',
        state: "CA",
        foodtype: "American",
        comment: "Great place to drink and eat", 
        image: 'hello',
        user_id: user.id
        }
      }
      post '/restaurants', params: restaurant
      expect(response).to have_http_status(422)
      restaurant= JSON.parse(response.body) 
      expect(restaurant['street']).to include "can't be blank"
    end
    it "does not allow a restaurant without a city" do

      restaurant = {
        restaurant:{
        name: 'Grubbers Bar&Grill',
        street: "2986 Ivy Street",
        city: '',
        state: "CA",
        foodtype: "American",
        comment: "Great place to drink and eat", 
        image: 'hello',
        user_id: user.id
        }
      }
    post '/restaurants', params: restaurant
    expect(response).to have_http_status(422)
    restaurant= JSON.parse(response.body) 
    expect(restaurant['city']).to include "can't be blank"
  end
    it "does not allow a restaurant without a state" do

      restaurant = {
        restaurant:{
        name: 'Grubbers Bar&Grill',
        street: "2986 Ivy Street",
        city: 'Chicago',
        state: "",
        foodtype: "American",
        comment: "Great place to drink and eat", 
        image: 'hello',
        user_id: user.id
        }
      }
    post '/restaurants', params: restaurant
    expect(response).to have_http_status(422)
    restaurant= JSON.parse(response.body) 
    expect(restaurant['state']).to include "can't be blank"
  end
it "does not allow a restaurant without a food type" do

  restaurant = {
    restaurant:{
    name: 'Grubbers Bar&Grill',
    street: "2986 Ivy Street",
    city: 'Chicago',
    state: "CA",
    foodtype: "",
    comment: "Great place to drink and eat", 
    image: 'hello',
    user_id: user.id
    }
  }
post '/restaurants', params: restaurant
expect(response).to have_http_status(422)
restaurant= JSON.parse(response.body) 
expect(restaurant['foodtype']).to include "can't be blank"
end
it "does not allow a restaurant without a comment" do

  restaurant = {
    restaurant:{
    name: 'Grubbers Bar&Grill',
    street: "2986 Ivy Street",
    city: 'Chicago',
    state: "CA",
    foodtype: "American",
    comment: "", 
    image: 'hello',
    user_id: user.id
    }
  }
post '/restaurants', params: restaurant
expect(response).to have_http_status(422)
restaurant= JSON.parse(response.body) 
expect(restaurant['comment']).to include "can't be blank"
end
it "does not allow a restaurant without an image" do

  restaurant = {
    restaurant:{
    name: 'Grubbers Bar&Grill',
    street: "2986 Ivy Street",
    city: 'Chicago',
    state: "CA",
    foodtype: "American",
    comment: "Great place to drink and eat", 
    image: '',
    user_id: user.id
    }
  }
post '/restaurants', params: restaurant
expect(response).to have_http_status(422)
restaurant= JSON.parse(response.body) 
expect(restaurant['image']).to include "can't be blank"
end
it "does not allow a restaurant without a user id" do

  restaurant = {
    restaurant:{
    name: 'Grubbers Bar&Grill',
    street: "2986 Ivy Street",
    city: 'Chicago',
    state: "CA",
    foodtype: "American",
    comment: "Great place to drink and eat", 
    image: 'hello',
    user_id: ""
    }
  }
post '/restaurants', params: restaurant
expect(response).to have_http_status(422)
restaurant= JSON.parse(response.body) 
expect(restaurant['user_id']).to include "can't be blank"
end


  end
end






