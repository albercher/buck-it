class CreatePins < ActiveRecord::Migration[7.0]
  def change
    create_table :pins do |t|
      t.string :name
      t.text :description
      t.string :color
      t.string :place_name
      t.decimal :longitude
      t.decimal :latitude
      t.boolean :visited
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end