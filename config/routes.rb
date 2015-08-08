Rails.application.routes.draw do

  devise_for :users
  get '/' => 'films#index', :as => 'root'
  post '/films' => 'films#create'
  put '/films' => 'films#update'
  delete '/films' => 'films#destroy'

  get '/sounds' => 'sounds#index'
  post '/sounds' => 'sounds#create'
  put '/sounds' => 'sounds#update'
  delete '/sounds' => 'sounds#destroy'

  get '/stills' => 'stills#index'
  post '/stills' => 'stills#create'
  put '/stills' => 'stills#update'
  delete '/stills' => 'stills#destroy'

  get '/about' => 'static#about'
  get '/contact' => 'static#contact'

  get '/admin' => 'users#admin', :as => 'user_root'

end
