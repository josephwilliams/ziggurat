class CommentsController < ApplicationController
  # before_action :require_signed_in!

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id

    if @comment.save
      render json: @comment
    else
      render json: @comment.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    @comment = current_comment
    render json: @comment
  end

  def destroy
    @comment = current_comment
    @comment.destroy
    render json: @comment
  end

  private
  def comment_params
    params.require(:comment).permit(:photo_id,
                                    :comment_body)

  def current_comment
    @current_comment ||= Comment.find(params[:id])
  end
end
