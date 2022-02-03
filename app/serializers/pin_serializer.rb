class PinSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :color, :place_name, :longitude, :latitude, :visited
  # has_one :user
end
