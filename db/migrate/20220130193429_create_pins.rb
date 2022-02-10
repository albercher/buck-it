class CreatePins < ActiveRecord::Migration[7.0]
  def change
    create_table :pins do |t|
      t.string :place_name
      t.float :longitude
      t.float :latitude
      t.integer :order_number
      t.string :place_id

      t.timestamps
    end
  end
end
