class Buckit < ApplicationRecord
  belongs_to :user
  has_many :pins, dependent: :destroy
  accepts_nested_attributes_for :pins
end
