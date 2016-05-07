class Api::PhotosController < ApplicationController
  def index
    cloud_name = ENV['CLOUD_NAME']
    upload_preset = Figaro.env.UPLOAD_PRESET

    @photos = Photo.all
  end

  def show
    @photo = Photo.includes(:likes).includes(:comments).find(params[:id])
    @likes = @photo.likes.size
  end

  def new
    @photo = Photo.new
  end

  def create
    @photo = Photo.new(photo_params)
    @photo.author_id = current_user.id
    @photo.username = current_user.username

    if @photo.save
      render :show
    else
      @errors = @photo.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  def destroy
    render json: {}
  end

  def search
    search_tags = Tag.where("name LIKE?", "#{params[:search]}")
    @photos = search_tags.map { |tag| tag.photos }.flatten
  end

  private
  def photo_params
    params.require(:photo).permit(:description,
                                  :image_url,
                                  :thumbnail_url,
                                  :width,
                                  :height)
  end
end
