class AddOrderToFilm < ActiveRecord::Migration
  def change
    add_column :films, :order, :integer
  end
end
