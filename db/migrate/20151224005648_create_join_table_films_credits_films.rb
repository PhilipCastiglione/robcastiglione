class CreateJoinTableFilmsCreditsFilms < ActiveRecord::Migration
  def change
    create_join_table :films, :film_credits do |t|
      t.index :film_id
      t.index :film_credit_id

      t.timestamps null: false
    end
  end
end
