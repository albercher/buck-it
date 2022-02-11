class User < ApplicationRecord
    has_secure_password
    has_many :pins
    has_many :activities
    validates :email, presence: true, uniqueness: true, format: /\w+@\w+\.{1}[a-zA-Z]{2,}/
    validates :first_name, presence: true, format: { with: /\A[a-zA-Z]+\z/,
        message: "only allows letters" }
    validates :last_name, presence: true, format: { with: /\A[a-zA-Z]+\z/,
        message: "only allows letters" }
end
