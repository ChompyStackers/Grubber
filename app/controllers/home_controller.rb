class HomeController < ApplicationController

    
    def yelp
        api_key = Rails.application.credentials.dig(:yelp,:access_key_id)
        # the problem seems to be this method triggering on load. with many params being passed to it it just fails. with one param it works? by using comma seperators i can see the params being passed in the terminal, but cannot get the 'response' to be pushed back as a javascript object into the state

        restaurant = HTTParty.get("https://api.yelp.com/v3/businesses/search?location=#{params[:location]}&term=#{params[:restaurant]}",headers: {Authorization: "Bearer #{api_key}"})
        
        if restaurant 
            render json: restaurant
        else
            render json: restaurant.errors , status:422
        end
    end


end

# @restaurant = HTTParty.get('https://api.yelp.com/v3/businesses/search?latitude='+`#{params[:lat]}&longitude=#{params[:long]}&term=#{params[:biz]}&limit=50`,headers: {'Authorization': 'Bearer ' + api_key})
# @restaurant = HTTParty.get('https://api.yelp.com/v3/businesses/search?latitude=41.7402&longitude=-87.7723&term=mcdonals&limit=50',headers: {'Authorization': 'Bearer ' + api_key})