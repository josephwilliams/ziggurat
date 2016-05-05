Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy, :show]
    resources :users, only: [:create, :show, :index]
    resources :likes, only: [:create, :destroy, :index]
    resource :tag, only: [:create, :destroy, :show]
    resources :tags, only: [:index]

    resources :photos, only: [:create, :show, :destroy, :index, :edit, :update] do
      resources :comments, only: [:create, :show, :destroy, :index]
    end
  end
end
