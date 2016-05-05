class Createtags < ActiveRecord::Migration
  create_table :tags do |t|
    t.string :name, null: false
    t.timestamps null: false
  end

  add_index :tags, :name

  create_table :taggings do |t|
    t.integer :tag_id, null: false
    t.integer :photo_id, null: false
    t.timestamps null: false
  end

  add_index :taggings, [:photo_id, :tag_id]
  add_index :taggings, :photo_id
  add_index :taggings, :tag_id
end
