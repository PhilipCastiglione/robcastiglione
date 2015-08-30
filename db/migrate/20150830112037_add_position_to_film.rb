class AddPositionToFilm < ActiveRecord::Migration
  def change
    add_column :films, :position, :integer
  end
end
