json.array!(@photos) do |photo|

    json.extract! photo, :image_url, :thumbnail_url, :description, :height, :width, :author_id, :id
    json.num_likes @likes

    # json.image_url photo.image_url
    # json.thumbnail_url photo.thumbnail_url
    # json.description photo.description
    # json.height photo.height
    # json.width photo.width
    # json.author_id photo.author_id
end
