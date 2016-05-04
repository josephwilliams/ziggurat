class Api::UsersController < ApplicationController
  def new
    @user = User.new
  end

  def index
    @users = User.all
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      render "api/users/show"
    else
      @errors = @user.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:password,
                                 :username,
                                 :description,
                                 :location,
                                 :email,
                                 :image_url)
  end
end
