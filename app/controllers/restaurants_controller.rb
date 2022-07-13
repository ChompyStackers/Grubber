class RestaurantsController < ApplicationController

    def index
        restaurants = Restaurant.all
        render json: restaurants
    end

    def create
        restaurant = Restaurant.create(restaurant_params)
        render json: restaurant
    end

    def update
    end

    def destroy
    end

    private
    def cat_params
      params.require(:cat).permit(:name, :age, :enjoys, :image)
    end
end
