json.extract! @photo, :image_url, :thumbnail_url, :width, :height, :description, :author_id, :id
json.num_likes @likes
# json.liked likes_hash[photo.id]
