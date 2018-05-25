class User < ApplicationRecord

  has_many :interviews
  has_many :interview_questions, through: :interviews

  has_secure_password

end
