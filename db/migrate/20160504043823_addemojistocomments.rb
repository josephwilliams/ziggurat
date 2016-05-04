class Addemojistocomments < ActiveRecord::Migration
  def change
    add_column :comments, :faces, :string
  end
end
