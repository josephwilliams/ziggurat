json.array!(@users) do |user|

    json.extract! user, :username, :location, :description, :id
end
