class CreateFilms < ActiveRecord::Migration
  def change
    create_table :films do |t|
      t.string :title
      t.string :url
      t.text :short_description

      t.timestamps null: false
    end
  end
end
