Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  devise_for :users

  resources :films, :filmcredits
  get '/' => 'films#index', :as => 'root'
  get '/projects' => 'films#projects'

  get '/about' => 'static#about'
  get '/contact' => 'static#contact'
end
