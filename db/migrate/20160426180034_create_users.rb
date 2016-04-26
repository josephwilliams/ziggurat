class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false, unique: true
      t.string :description
      t.string :location
      t.string :image_url

      t.string :password_digest, null: false
      t.string :session_token, null: false

      t.timestamps null: false
    end

      add_index :users, :username, unique: true
  end
end
