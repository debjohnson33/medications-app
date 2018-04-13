Rails.application.routes.draw do
  
  namespace :api do
  	resources :reviews
  	resources :medications do
  		resources :reviews, :only =>[:index, :show]
  	end
  end
end
