class Api::LikesController < ApplicationController

  def create
    @like = Like.new(
      user_id: current_user.id,
      photo_id: likes_params[:photo_id]
    )

    if(@like.save)
      render json: {
        userId: current_user.id,
        photoId: likes_params[:photo_id]
        }, status: 200
    else
      @errors = @like.errors.full_messages
			render "api/shared/error", status: 422
    end
  end

  def destroy
    @like = Like.find_by(
      user_id: current_user.id,
      photo_id: likes_params[:photo_id]
    )

    if(@like.destroy)
      render json: {
        userId: current_user.id,
        photoId: likes_params[:photo_id]
        }, status: 200
    else
      @errors = like.errors.full_messages
			render "api/shared/error", status: 422
    end
  end

  private
  def likes_params
    params.require(:like).permit(:photo_id)
  end

end
