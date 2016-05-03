class Comment < ActiveRecord::Base
  validates :photo_id, :comment_body, presence: true

  belongs_to :user
  belongs_to :photo
end
