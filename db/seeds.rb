# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


200.times do
  name = Faker::Name.name
  occupation = Faker::Job.title
  avatar = Faker::Avatar.image(slug: name, size: "50x50", format: "png", set: 'set4')
  gender = Faker::Gender.type
  Friend.create(name: name, occupation: occupation, avatar: avatar, gender: gender)
end

puts "200 Friends seeded"