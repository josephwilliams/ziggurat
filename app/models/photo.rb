class Photo < ActiveRecord::Base
  validates :image_url, presence: true

  belongs_to(
    :author,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: "User"
  );

  has_many :likes, counter_cache: true
  has_many :likers, through: :likes, source: :user
  has_many :comments

  def liked_by?(user)
    likes.exists?(user_id: user.id)
  end
end
