class CreateInterviews < ActiveRecord::Migration[5.1]
  def change
    create_table :interviews do |t|
      t.references :user, foreign_key: true
      t.references :interview_question, foreign_key: true
      t.integer :time_limit

      t.timestamps
    end
  end
end
