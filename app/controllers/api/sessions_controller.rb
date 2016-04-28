class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      session_params[:username],
      session_params[:password]
    )

    if @user
      sign_in(@user)
      render "api/users/show"
    else
      @errors = ['invalid credentials']
      render "api/shared/error", status: 401
    end
  end

  def show
    if current_user
      @user = current_user
      render "api/users/show"
    else
      @errors = nil
      render "api/shared/error", status: 404
    end
  end

  def destroy
    @user = current_user
    if @user
      sign_out
      render "api/users/show"
    else
      @errors = ['no one logged in']
      render "api/shared/error", status: 404
    end
  end

  private
  def session_params
    params.require(:user).permit(:username, :password)
  end
end
