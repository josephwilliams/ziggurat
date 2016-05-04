class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    @comment.username = current_user.username

    if @comment.save
      render json: @comment
    else
      render json: @comment.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    @comments = current_comment
    render json: @comment
  end

  def index
    @comments = Comment.where(photo_id: params[:photo_id])

    render json: @comments
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
  end

  def current_comment
    @current_comment ||= Comment.find(params[:id])
  end
end
