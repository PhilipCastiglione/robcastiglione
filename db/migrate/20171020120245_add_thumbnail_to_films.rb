class AddThumbnailToFilms < ActiveRecord::Migration
  def change
    add_column :films, :thumbnail, :string
  end
end
