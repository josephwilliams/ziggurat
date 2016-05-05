class Addusernametolikes < ActiveRecord::Migration
  def change
    add_column :likes, :username, :string
  end
end
