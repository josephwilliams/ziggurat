class Tagging < ActiveRecord::Base
  belongs_to :photo
  belongs_to :tag

  validates :photo_id, :tag_id, presence: true
  validates :tag_id, uniqueness: { scope: :photo_id }
end
