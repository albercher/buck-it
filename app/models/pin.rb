class Pin < ApplicationRecord
  belongs_to :user
  validates :latitude, presence: true
  validates :longitude, presence: true
  validates :place_name, presence: true
end
