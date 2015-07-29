class CreateSounds < ActiveRecord::Migration
  def change
    create_table :sounds do |t|
      t.string :title
      t.string :url
      t.text :short_description

      t.timestamps null: false
    end
  end
end
