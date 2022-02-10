class AddBuckitToPins < ActiveRecord::Migration[7.0]
  def change
    add_reference :pins, :buckit, null: false, foreign_key: true
  end
end
