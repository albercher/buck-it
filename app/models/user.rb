class User < ApplicationRecord
    has_secure_password
    has_many :buckits
    has_many :activities
    has_many :pins, through: :buckits
    validates :email, presence: true, uniqueness: true, format: /\w+@\w+\.{1}[a-zA-Z]{2,}/
end
