require 'faker'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#Create Users
50.times do
  User.create(name: Faker::Name.unique.name, email: Faker::Internet.unique.safe_email)
end

#Create Categories
50.times do
  Category.create(name: Faker::GameOfThrones.house)
end

#Create Questions
50.times do
  Question.create(content: Faker::GameOfThrones.character, category: Category.all.sample)
end

#Create Interview
50.times do
  Interview.create(user: User.all.sample)
end

#Create Interview Questions
50.times do
  InterviewQuestion.create(question: Question.all.sample, interview: Interview.all.sample)
end
