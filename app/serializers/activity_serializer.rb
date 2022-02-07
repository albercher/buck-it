class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :completed
  has_one :user
end
