class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :first_name, :last_name, :initials
  has_many :pins

  def initials
    (self.object.first_name[0] + self.object.last_name[0]).upcase
  end
end
