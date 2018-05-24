class Interview < ApplicationRecord
  belongs_to :user
  belongs_to :interview_question
end
