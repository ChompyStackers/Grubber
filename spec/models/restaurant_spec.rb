require 'rails_helper'

RSpec.describe Restaurant, type: :model do
  it "should validate city" do
    restaurant = Restaurant.create
    expect(restaurant.errors[:city]).to_not be_empty
  end
end
