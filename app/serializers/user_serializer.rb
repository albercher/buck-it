class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :first_name, :last_name, :initials


  def initials
    (self.object.first_name[0] + self.object.last_name[0]).upcase
  end
end
