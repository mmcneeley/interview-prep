class InterviewSerializer < ActiveModel::Serializer
  attributes :id, :interview_questions, :questions
end
