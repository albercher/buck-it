class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :initials, :display_name
  has_many :buckits
  has_many :activities do
    object.activities.order(created_at: :desc)
  end

  def initials
    (self.object.first_name[0] + self.object.last_name[0]).upcase
  end

  def display_name
    "#{self.object.first_name} #{self.object.last_name[0]}"
  end
end
