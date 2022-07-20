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
    it 'validates precense of street' do
      restaurant =user.restaurants.create(
        name: "Mcdonalds",
        street:"",
        city: "Chicago",
        state: "Illinois",
        comment: "hello",
        foodtype: "chinese",
        image: "www.urlhelper.com"
      )
      p restaurant.errors[:street]
      expect(restaurant.errors[:street]).to_not be_empty
    end
    it 'validates precense of city' do
      restaurant =user.restaurants.create(
        name: "Mcdonalds",
        street:"123 street",
        city: "",
        state: "Illinois",
        comment: "hello",
        foodtype: "chinese",
        image: "www.urlhelper.com"
      )
      p restaurant.errors[:city]
      expect(restaurant.errors[:city]).to_not be_empty
    end
    it 'validates precense of state' do
      restaurant =user.restaurants.create(
        name: "Mcdonalds",
        street:"123 street",
        city: "Chicago",
        state: "",
        comment: "hello",
        foodtype: "chinese",
        image: "www.urlhelper.com"
      )
      p restaurant.errors[:state]
      expect(restaurant.errors[:state]).to_not be_empty
    end
    it 'validates precense of comment' do
      restaurant =user.restaurants.create(
        name: "Mcdonalds",
        street:"123 street",
        city: "Chicago",
        state: "Illinois",
        comment: "",
        foodtype: "chinese",
        image: "www.urlhelper.com"
      )
      p restaurant.errors[:comment]
      expect(restaurant.errors[:comment]).to_not be_empty
    end
    it 'validates precense of foodtype' do
      restaurant =user.restaurants.create(
        name: "Mcdonalds",
        street:"123 street",
        city: "Chicago",
        state: "Illinois",
        comment: "hello",
        foodtype: "",
        image: "www.urlhelper.com"
      )
      p restaurant.errors[:foodtype]
      expect(restaurant.errors[:foodtype]).to_not be_empty
    end
    it 'validates precense of image' do
      restaurant =user.restaurants.create(
        name: "Mcdonalds",
        street:"123 street",
        city: "Chicago",
        state: "Illinois",
        comment: "hello",
        foodtype: "chinese",
        image: ""
      )
      p restaurant.errors[:image]
      expect(restaurant.errors[:image]).to_not be_empty
    end
  end

  describe 'minimum length' do 
    it 'will validate name and minimum length of restaurant name to 3' do 
      restaurant = Restaurant.create(
        name: "M",
        street:"123 street",
        city: "Chicago",
        state: "Illinois",
        comment: "hello",
        foodtype: "chinese",
        image: "www.urlhelper.com"
      )
      p restaurant.errors[:name]
      expect(restaurant.errors[:name]).to include "is too short (minimum is 3 characters)"
    end 
    it 'will validate street and minimum length of restaurant street to 3' do 
      restaurant = Restaurant.create(
        name: "McDonalds",
        street:"1",
        city: "Chicago",
        state: "Illinois",
        comment: "hello",
        foodtype: "chinese",
        image: "www.urlhelper.com"
      )
      p restaurant.errors[:street]
      expect(restaurant.errors[:street]).to include "is too short (minimum is 3 characters)"
    end 
    it 'will validate city and minimum length of restaurant city to 3' do 
      restaurant = Restaurant.create(
        name: "McDonalds",
        street:"123 street",
        city: "C",
        state: "Illinois",
        comment: "hello",
        foodtype: "chinese",
        image: "www.urlhelper.com"
      )
      p restaurant.errors[:city]
      expect(restaurant.errors[:city]).to include "is too short (minimum is 3 characters)"
    end 
    it 'will validate state and minimum length of restaurant state to 2' do 
      restaurant = Restaurant.create(
        name: "McDonalds",
        street:"123 street",
        city: "Chicago",
        state: "I",
        comment: "hello",
        foodtype: "chinese",
        image: "www.urlhelper.com"
      )
      p restaurant.errors[:state]
      expect(restaurant.errors[:state]).to include "is too short (minimum is 2 characters)"
    end 
    it 'will validate comment and minimum length of restaurant comment to 3' do 
      restaurant = Restaurant.create(
        name: "McDonalds",
        street:"123 street",
        city: "Chicago",
        state: "Illinois",
        comment: "he",
        foodtype: "chinese",
        image: "www.urlhelper.com"
      )
      p restaurant.errors[:comment]
      expect(restaurant.errors[:comment]).to include "is too short (minimum is 3 characters)"
    end 
    it 'will validate foodtype and minimum length of restaurant foodtype to 3' do 
      restaurant = Restaurant.create(
        name: "McDonalds",
        street:"123 street",
        city: "Chicago",
        state: "Illinois",
        comment: "hello",
        foodtype: "we",
        image: "www.urlhelper.com"
      )
      p restaurant.errors[:foodtype]
      expect(restaurant.errors[:foodtype]).to include "is too short (minimum is 3 characters)"
    end 
    it 'will validate image and minimum length of restaurant image to 8' do 
      restaurant = Restaurant.create(
        name: "McDonalds",
        street:"123 street",
        city: "Chicago",
        state: "Illinois",
        comment: "hello",
        foodtype: "chinese",
        image: "ur"
      )
      p restaurant.errors[:image]
      expect(restaurant.errors[:image]).to include "is too short (minimum is 8 characters)"
    end 
  end

  describe 'maximum length' do 
    it 'will validate name and maximum length of restaurant name to 100' do 
      restaurant = Restaurant.create(
        name: "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz",
        street:"",
        city: "",
        state: "",
        comment: "",
        foodtype: "",
        image: ""
      )
      p restaurant.errors[:name]
      expect(restaurant.errors[:name]).to include "is too long (maximum is 100 characters)"
    end
    it 'will validate street and maximum length of restaurant street to 20' do 
      restaurant = Restaurant.create(
        name: "",
        street:"abcdefghijklmnopqrstuvwxyz",
        city: "",
        state: "",
        comment: "",
        foodtype: "",
        image: ""
      )
      p restaurant.errors[:street]
      expect(restaurant.errors[:street]).to include "is too long (maximum is 20 characters)"
    end
    it 'will validate city and maximum length of restaurant city to 20' do 
      restaurant = Restaurant.create(
        name: "",
        street:"",
        city: "abcdefghijklmnopqrstuvwxyz",
        state: "",
        comment: "",
        foodtype: "",
        image: ""
      )
      p restaurant.errors[:city]
      expect(restaurant.errors[:city]).to include "is too long (maximum is 20 characters)"
    end
    it 'will validate state and maximum length of restaurant state to 15' do 
      restaurant = Restaurant.create(
        name: "",
        street:"",
        city: "",
        state: "abcdefghijklmnopqrstuvwxyz",
        comment: "",
        foodtype: "",
        image: ""
      )
      p restaurant.errors[:state]
      expect(restaurant.errors[:state]).to include "is too long (maximum is 15 characters)"
    end
    it 'will validate comment and maximum length of restaurant comment to 250' do 
      restaurant = Restaurant.create(
        name: "",
        street:"",
        city: "",
        state: "",
        comment: "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz",
        foodtype: "",
        image: ""
      )
      p restaurant.errors[:comment]
      expect(restaurant.errors[:comment]).to include "is too long (maximum is 250 characters)"
    end
    it 'will validate foodtype and maximum length of restaurant foodtype to 20' do 
      restaurant = Restaurant.create(
        name: "",
        street:"",
        city: "",
        state: "",
        comment: "",
        foodtype: "abcdefghijklmnopqrstuvwxyz",
        image: ""
      )
      p restaurant.errors[:foodtype]
      expect(restaurant.errors[:foodtype]).to include "is too long (maximum is 20 characters)"
    end
    it 'will validate image and maximum length of restaurant foodtype to 250' do 
      restaurant = Restaurant.create(
        name: "",
        street:"",
        city: "",
        state: "",
        comment: "",
        foodtype: "",
        image: "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"
      )
      p restaurant.errors[:image]
      expect(restaurant.errors[:image]).to include "is too long (maximum is 250 characters)"
    end
  end
end


