Rails.application.routes.draw do
  resources :activities
  resources :pins, only: [:create, :update, :destroy]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  post '/signup', to: "users#create"
  get '/me', to: "users#show"


  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get '/users', to: "users#index"


  # resources :users, only: [:show] do 
  #   resources :pins, only: [:index, :create, :update, :destroy]
  #   resources :activities, only: [:index, :create, :update, :destroy]
  # end


end
