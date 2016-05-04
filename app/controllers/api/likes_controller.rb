class Api::LikesController < ApplicationController
   before_action :require_signed_in!
   before_action :require_like_owner!, only: [:destroy]

   def create
    #  @like = current_user.likes.new(like_params)
     @like = Like.new(like_params)
     @like.user_id = current_user.id

     if @like.save
       render json: @like
     else
       render json: @like.errors.full_messages, status: :unprocessable_entity
     end
   end

   def destroy
     @like = current_like
     @like.destroy
     render json: @like
   end

   private
   def like_params
     params.require(:like).permit(:photo_id)
   end

   def current_like
     @current_like ||= Like.find_by(
      user_id: current_user.id,
      photo_id: like_params[:photo_id]
     )
   end

   def require_like_owner!
     unless current_like.user_id == current_user.id
       render json: ["Impossible!"], status: :unauthorized
     end
   end
end
