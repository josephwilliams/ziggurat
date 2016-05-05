json.array!(@users) do |user|

    json.extract! user, :username, :location, :description, :id
    json.liked_photos user.liked_photos.map { |photo| photo.id }

end
