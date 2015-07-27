Rails.application.routes.draw do

  get '/' => 'films#index', :as => 'root'
  get '/about' => 'static#about'
  get '/contact' => 'static#contact'

end
