class CreateActivities < ActiveRecord::Migration[7.0]
  def change
    create_table :activities do |t|
      t.string :name
      t.string :description
      t.belongs_to :user, null: false, foreign_key: true
      t.boolean :completed, default: false
      
      t.timestamps
    end
  end
end
