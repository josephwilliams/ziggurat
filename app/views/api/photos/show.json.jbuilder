json.extract! @photo, :image_url, :thumbnail_url, :width, :height, :description, :author_id, :id, :tags

json.likers @photo.likers.map { |user| user.id }
json.like_count @photo.likers.count
json.comment_count @photo.comments.count
json.likes @photo.likes
json.tag_count @photo.tags.count
