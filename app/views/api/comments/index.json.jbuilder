json.array!(@comments) do |comment|
  json.extract! comment, :comment_body, :user_id, :username, :photo_id, :id 
end
