class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.string :image_url, null: false
      t.string :description
      t.integer :author_id, null: false
    end

    add_index :photos, :author_id
  end
end
