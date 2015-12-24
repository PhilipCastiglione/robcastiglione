Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  devise_for :users

  resources :films, :filmcredits, :sounds, :stills 
  get '/' => 'films#index', :as => 'root'

  get '/about' => 'static#about'
  get '/contact' => 'static#contact'
end
