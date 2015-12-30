class CreateFilmCredits < ActiveRecord::Migration
  def change
    create_table :film_credits do |t|
      t.string :role
      t.string :name

      t.timestamps null: false
    end
  end
end
