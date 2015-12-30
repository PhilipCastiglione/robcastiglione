class AddOrderToStill < ActiveRecord::Migration
  def change
    add_column :stills, :order, :integer
  end
end
