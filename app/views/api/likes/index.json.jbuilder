json.array!(@likes) do |like|
  json.extract! like, :id, :user_id, :photo_id, :username, :created_at
  json.username like.user.username
end
