# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')
user2 = User.where(email: 'tester1@123.com').first_or_create(password: '123456', password_confirmation: '123456')

restaurants_array = [
    {name: "Mcdonalds", 
    street: "123 Ash St.",
    city: "San Diego",
    state: "CA",
    foodtype: "Italian",
    comment: "Decent, 2 out of 5 stars.",
    image: "https://newdenizen.com/wp-content/uploads/2019/06/lasagna-coperta.jpg"

    },

    {name: "kimiko", 
    street: "123 Ash St.",
    city: "San Diego",
    state: "CA",
    foodtype: "Japanese",
    comment: "Decent, 2 out of 5 stars.",
    image: "https://newdenizen.com/wp-content/uploads/2019/06/lasagna-coperta.jpg"

    },
    {name: "Alberto's", 
    street: "123 Ash St.",
    city: "San Diego",
    state: "CA",
    foodtype: "Mexican",
    comment: "Decent, 2 out of 5 stars.",
    image: "https://newdenizen.com/wp-content/uploads/2019/06/lasagna-coperta.jpg"

    },
]

restaurants_array2 = [
    {name: "taco bell", 
    street: "123 Ash St.",
    city: "San Diego",
    state: "CA",
    foodtype: "Italian",
    comment: "Decent, 2 out of 5 stars.",
    image: "https://newdenizen.com/wp-content/uploads/2019/06/lasagna-coperta.jpg"

    },

    {name: "phils pizza", 
    street: "123 Ash St.",
    city: "San Diego",
    state: "CA",
    foodtype: "Japanese",
    comment: "Decent, 2 out of 5 stars.",
    image: "https://newdenizen.com/wp-content/uploads/2019/06/lasagna-coperta.jpg"

    },
    {name: "KFC", 
    street: "123 Ash St.",
    city: "San Diego",
    state: "CA",
    foodtype: "Mexican",
    comment: "Decent, 2 out of 5 stars.",
    image: "https://newdenizen.com/wp-content/uploads/2019/06/lasagna-coperta.jpg"

    },
]

restaurants_array.each do |restaurant_obj|
    user.restaurants.create restaurant_obj
end
restaurants_array2.each do |restaurant_obj|
    user2.restaurants.create restaurant_obj
end

p user.restaurants
p user2.restaurants