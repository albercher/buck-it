class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :initials
  has_many :pins
  has_many :activities

  def initials
    (self.object.first_name[0] + self.object.last_name[0]).upcase
  end
end
