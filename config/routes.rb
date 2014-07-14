Rails.application.routes.draw do
  devise_for :users
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'app#index'

  get '/search' => 'app#search'

  resources :users do
    resources :stocks
  end

end
