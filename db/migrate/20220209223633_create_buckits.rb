class CreateBuckits < ActiveRecord::Migration[7.0]
  def change
    create_table :buckits do |t|
      t.string :name
      t.string :description
      t.string :color
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
