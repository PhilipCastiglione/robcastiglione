class AddPositionToSound < ActiveRecord::Migration
  def change
    add_column :sounds, :position, :integer
  end
end
