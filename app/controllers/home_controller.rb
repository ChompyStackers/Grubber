class HomeController < ApplicationController

    
    def index
        api_key = Rails.application.credentials.dig(:yelp,:access_key_id)
        @restaurant = HTTParty.get(`https://api.yelp.com/v3/businesses/search?latitude=#{params[:lat_params]}&longitude=#{params[:long_params]}&term=#{params[:business_params]}&limit=50`,headers: {'Authorization': 'Bearer ' + api_key})
        # binding.pry
    end


end
