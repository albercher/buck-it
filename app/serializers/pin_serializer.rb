class PinSerializer < ActiveModel::Serializer
  attributes :id, :place_name, :longitude, :latitude, :order_number, :place_id
  has_one :buckit
end
