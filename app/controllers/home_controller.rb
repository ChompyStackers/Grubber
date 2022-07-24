class HomeController < ApplicationController

    
    def yelp
        api_key = Rails.application.credentials.dig(:yelp,:access_key_id)
        restaurant = HTTParty.get("https://api.yelp.com/v3/businesses/search?location=#{params[:location]}&term=#{params[:restaurant]}&limit=12",headers: {Authorization: "Bearer #{api_key}"})
        
        if restaurant 
            render json: restaurant
        else
            render json: restaurant.errors , status:422
            # status?
        end
    end
end