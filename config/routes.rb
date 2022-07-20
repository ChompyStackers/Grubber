Rails.application.routes.draw do
  resources :restaurants
  devise_for :users

  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  get '/home/yelp/:params/:params/:params', to: 'home#index'
  root 'home#index'
end
