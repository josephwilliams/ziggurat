Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resource :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy, :show]
    resource :photos, only: [:create, :show, :destroy, :index]

  end
end
