class PhotosController < ApplicationController
  def index
    render json: {}
  end

  def show
    render json: {}
  end

  def new
    @photo = Photo.new
    render json: {}
  end

  def create
    @photo = Photo.new(photo_params)
    if @photo.save
      render "api/photos/show"
    else
      @errors = @photo.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  def destroy
    render json: {}
  end

  private
  def photo_params
    params.require(:photo).permit(:description, :image_url)
  end
end
