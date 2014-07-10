class CreateStocks < ActiveRecord::Migration
  def change
    create_table :stocks do |t|
      t.string :ticker
      t.string :name
      t.integer :quantity
      t.references :user
      t.timestamps
    end
  end
end
