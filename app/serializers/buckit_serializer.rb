class BuckitSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :color
  # has_one :user
  has_many :pins
end
