Rails.application.routes.draw do
  resources :restaurants
  devise_for :users

  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  get 'home/:location/:restaurant', to: 'home#yelp'
  root 'home#index'
end

