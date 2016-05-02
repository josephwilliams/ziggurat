class Addparamstophotos < ActiveRecord::Migration
  def change
    add_column :photos, :thumbnail_url, :string
    add_column :photos, :width, :integer
    add_column :photos, :height, :integer
  end
end
