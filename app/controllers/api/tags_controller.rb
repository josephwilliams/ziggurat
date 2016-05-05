class Api::TagsController < ApplicationController
  def create
     @tag = Tag.find_by(name: tag_params["name"])
     @photo = Photo.find_by(id: tag_params["photo_id"])

     if @tag
       @tagging = Tagging.create(photo_id: tag_params["photo_id"], tag_id: @tag.id)
       render "api/photos/show"
     else
       @tag = Tag.new(name: tag_params["name"])
       if @tag.save
         @tagging = Tagging.create(photo_id: tag_params["photo_id"], tag_id: @tag.id)
         render "api/photos/show"
       else
         @errors = @user.errors.full_messages
         render "api/shared/error", status: 422
       end
     end
  end

  def index
    @tags = Tag.all
    render :index
  end

  private

  def tag_params
    params.require(:tag).permit(:name, :photo_id)
  end
end
