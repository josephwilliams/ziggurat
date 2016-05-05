json.array!(@photos) do |photo|

    json.extract! photo, :image_url, :thumbnail_url, :description, :height, :width, :author_id, :id
    # json.num_likes @likes
    json.likers photo.likers.map { |user| user.id }
    json.like_count photo.likers.count
    json.comment_count photo.comments.count

end
