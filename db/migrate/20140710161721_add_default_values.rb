class AddDefaultValues < ActiveRecord::Migration
  def change
    change_column :stocks, :ticker, :string, :null => false
    change_column :stocks, :quantity, :integer, :default => 0
  end
end
