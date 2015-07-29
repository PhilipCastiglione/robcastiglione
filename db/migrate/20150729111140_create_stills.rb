class CreateStills < ActiveRecord::Migration
  def change
    create_table :stills do |t|
      t.string :title
      t.string :url
      t.text :short_description

      t.timestamps null: false
    end
  end
end
