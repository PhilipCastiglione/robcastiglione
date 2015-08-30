class AddPositionToFilmCredit < ActiveRecord::Migration
  def change
    add_column :film_credits, :position, :integer
  end
end
