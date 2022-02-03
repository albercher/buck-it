class Pin < ApplicationRecord
  belongs_to :user
  has_many :activities, dependent: :destroy
  validates :latitude, presence: true
  validates :longitude, presence: true
  validates :place_name, presence: true
end
