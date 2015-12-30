class AddOrderToSound < ActiveRecord::Migration
  def change
    add_column :sounds, :order, :integer
  end
end
