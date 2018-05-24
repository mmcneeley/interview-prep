class Interview < ApplicationRecord
  belongs_to :user
  has_many :interview_questions
  has_many :questions, through: :interview_question
end
