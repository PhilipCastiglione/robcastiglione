class AddPositionToStill < ActiveRecord::Migration
  def change
    add_column :stills, :position, :integer
  end
end
