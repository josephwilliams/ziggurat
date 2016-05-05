json.extract! @user, :username, :id, :location, :description

json.liked_photos @user.liked_photos.map { |photo| photo.id }
