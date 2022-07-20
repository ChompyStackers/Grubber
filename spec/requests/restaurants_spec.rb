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
        image: ' hello hello',
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
    it "does not allow a restaurant with a name of less than three characters" do
      restaurant = {
        restaurant:{
        name: "nn",
        street: "2986 Ivy Street",
        city: 'Chicago',
        state: "CA",
        foodtype: "American",
        comment: "Great place to drink and eat", 
        image: 'hello hello',
        user_id: user.id
        }
      }
      post '/restaurants', params: restaurant
      expect(response).to have_http_status(422)
      restaurant= JSON.parse(response.body) 
      expect(restaurant['name']).to include "is too short (minimum is 3 characters)"
    end
    it "does not allow a restaurant with a street of less than 3 characters" do
      restaurant = {
        restaurant:{
        name: "Grubbers Bar&Grill",
        street: "23",
        city: 'Chicago',
        state: "CA",
        foodtype: "American",
        comment: "Great place to drink and eat", 
        image: 'hello hello',
        user_id: user.id
        }
      }
      post '/restaurants', params: restaurant
      expect(response).to have_http_status(422)
      restaurant= JSON.parse(response.body) 
      expect(restaurant['street']).to include "is too short (minimum is 3 characters)"
    end
    it "does not allow a restaurant with a city of less than 3 characters" do
      restaurant = {
        restaurant:{
        name: 'Grubbers Bar&Grill',
        street: "2986 Ivy Street",
        city: 'CO',
        state: "CA",
        foodtype: "American",
        comment: "Great place to drink and eat", 
        image: 'hello hello',
        user_id: user.id
        }
      }
      post '/restaurants', params: restaurant
      expect(response).to have_http_status(422)
      restaurant= JSON.parse(response.body) 
      expect(restaurant['city']).to include "is too short (minimum is 3 characters)"
    end
    it "does not allow a restaurant with a state of less than 2 characters" do
      restaurant = {
        restaurant:{
        name: 'Grubbers Bar&Grill',
        street: "2986 Ivy Street",
        city: 'Chicago',
        state: "V",
        foodtype: "American",
        comment: "Great place to drink and eat", 
        image: 'hello hello',
        user_id: user.id
        }
      }
      post '/restaurants', params: restaurant
      expect(response).to have_http_status(422)
      restaurant= JSON.parse(response.body) 
      expect(restaurant['state']).to include "is too short (minimum is 2 characters)"
    end
    it "does not allow a restaurant with a food type of less than 3 characters" do
      restaurant = {
      restaurant:{
      name: 'Grubbers Bar&Grill',
      street: "2986 Ivy Street",
      city: 'Chicago',
      state: "CA",
      foodtype: "cc",
      comment: "Great place to drink and eat", 
      image: 'hello hello',
      user_id: user.id
      }
      }
      post '/restaurants', params: restaurant
      expect(response).to have_http_status(422)
      restaurant= JSON.parse(response.body) 
      expect(restaurant['foodtype']).to include "is too short (minimum is 3 characters)"
    end
    it "does not allow a restaurant with a comment of less than 3 characters" do
      restaurant = {
      restaurant:{
      name: 'Grubbers Bar&Grill',
      street: "2986 Ivy Street",
      city: 'Chicago',
      state: "CA",
      foodtype: "American",
      comment: "mm", 
      image: 'hello hello',
      user_id: user.id
      }
      }
      post '/restaurants', params: restaurant
      expect(response).to have_http_status(422)
      restaurant= JSON.parse(response.body) 
      expect(restaurant['comment']).to include "is too short (minimum is 3 characters)"
    end
    it "does not allow a restaurant with an image of less than 8 characters" do
      restaurant = {
      restaurant:{
      name: 'Grubbers Bar&Grill',
      street: "2986 Ivy Street",
      city: 'Chicago',
      state: "CA",
      foodtype: "American",
      comment: "Great place to drink and eat", 
      image: 'hello ',
      user_id: user.id
      }
      }
      post '/restaurants', params: restaurant
      expect(response).to have_http_status(422)
      restaurant= JSON.parse(response.body) 
      expect(restaurant['image']).to include "is too short (minimum is 8 characters)"
    end
  end

  describe "PATCH /update" do
    it "updates a restaurant that exists in the database" do 
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
      restaurant = Restaurant.first 
      updated_restaurant_params = {
        restaurant: {
          street: '123 street',
          city: 'Chicago',
          state: 'illinois',
          foodtype: 'FastFood',
          comment: 'ok 5/5',
          image: 'https://mcdonalds.com',
          name:"McDonald's",
          user_id: user.id
        }
      }
      patch "/restaurants/#{restaurant.id}", params: updated_restaurant_params
      expect(response).to have_http_status(200)
      updated_restaurant = Restaurant.find(restaurant.id)
      expect(restaurant.comment).to eq "ok 2/5"
      expect(updated_restaurant.comment).to eq "ok 5/5"
    end

    it 'does not update a restaurant without a name and minimum length' do 
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
      restaurant = Restaurant.first 

      updated_restaurant_params = {
        restaurant: {
          street: '123 street',
          city: 'Chicago',
          state: 'illinois',
          foodtype: 'FastFood',
          comment: 'ok 2/5',
          image: 'https://mcdonalds.com',
          name:"",
          user_id: user.id
        }
      }
      patch "/restaurants/#{restaurant.id}", params: updated_restaurant_params

      expect(response).to have_http_status(422)
      restaurant = JSON.parse(response.body)
      expect(restaurant['name']).to include "can't be blank", "is too short (minimum is 2 characters)"
    end
    
    it 'does not update a Restaurant without a age and minimum length' do 
      Restaurant.create(
          name:'Pennywise',
          age: 40,
          specialty:'Trans-dimensional Demonic Alien',
          quote:'Time to float.',
          image:'https://images.app.goo.gl/Qaxt9KuSWEJcigM2A',
      )
      restaurant = Restaurant.first 

      updated_restaurant_params = {
        restaurant: {
            name:'Pennywise',
            age: '',
            specialty:'Trans-dimensional Demonic Alien',
            quote:'Time to float.',
            image:'https://images.app.goo.gl/Qaxt9KuSWEJcigM2A',
        }
        }
        patch "/restaurants/#{restaurant.id}", params: updated_restaurant_params

        expect(response).to have_http_status(422)
        restaurant = JSON.parse(response.body)
        expect(restaurant['age']).to include "can't be blank", "is too short (minimum is 1 character)"
    end
    it 'does not update a Restaurant without a specialty and minimum length' do 
      Restaurant.create(
          name:'Pennywise',
          age: 40,
          specialty:'Trans-dimensional Demonic Alien',
          quote:'Time to float.',
          image:'https://images.app.goo.gl/Qaxt9KuSWEJcigM2A',
      )
      restaurant = Restaurant.first 

      updated_restaurant_params = {
        restaurant: {
            name:'Pennywise',
            age: 40,
            specialty:'',
            quote:'Time to float.',
            image:'https://images.app.goo.gl/Qaxt9KuSWEJcigM2A',
        }
        }
        patch "/restaurants/#{restaurant.id}", params: updated_restaurant_params

        expect(response).to have_http_status(422)
        restaurant = JSON.parse(response.body)
        expect(restaurant['specialty']).to include "can't be blank", "is too short (minimum is 5 characters)"
    end

  end
  
  describe "DELETE /destroy" do
    it "deletes a Restaurant from the database" do 
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
      restaurant = Restaurant.first
      delete "/restaurants/#{restaurant.id}"
      expect(response).to have_http_status(200)
    end
  end
end