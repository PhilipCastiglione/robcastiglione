Rails.application.routes.draw do

  devise_for :users
  get '/' => 'films#index', :as => 'root'
  get '/sound' => 'sounds#index'
  get '/stills' => 'stills#index'
  get '/about' => 'static#about'
  get '/contact' => 'static#contact'
  get '/admin' => 'users#admin', :as => 'user_root_path'

end
