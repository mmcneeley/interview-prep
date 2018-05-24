class CreateInterviewQuestions < ActiveRecord::Migration[5.1]
  def change
    create_table :interview_questions do |t|
      t.references :question, foreign_key: true
      t.integer :time_duration

      t.timestamps
    end
  end
end
