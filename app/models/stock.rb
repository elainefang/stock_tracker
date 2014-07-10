class Stock < ActiveRecord::Base
  belongs_to :user

  validates :user, presence: true
  validates :ticker, presence: true

end
