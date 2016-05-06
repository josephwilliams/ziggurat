# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(username: "guest", password: "password", email: "...", location: "USA")
User.create!(username: "Joseph", password: "password", email: "...", location: "San Francisco");
User.create!(username: "Tyler", password: "williams", email: "...", location: "Pittsburgh");
User.create!(username: "Adam", password: "password", email: "...", location: "Washington, D.C.");

Photo.create!(image_url: "https://images.unsplash.com/45/Vo7YbYQQ8iyOo4J9bOoj_ggb24.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=f4405935f612ba77d99216f0f2f8f91a",
              author_id: 2,
              username: "Joseph",
              description: "the bay")
Photo.create!(image_url: "https://images.unsplash.com/photo-1438930249256-07387cf30528?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=867be065397a1352dbeea0a60e0417f7",
              author_id: 2,
              username: "Joseph",
              description: "The sea..")
Photo.create!(image_url: "https://images.unsplash.com/12/palm-trees.JPG?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=c68801d882fdd2231a11a56050d57d93",
              author_id: 2,
              username: "Joseph",
              description: "palm trees..")
Photo.create!(image_url: "https://res.cloudinary.com/ziggurat/image/upload/v1462242472/sugr77oyhv6npa8t14hn.jpg",
              author_id: 2,
              username: "Joseph",
              description: "chill night on the river")
Photo.create!(image_url: "https://res.cloudinary.com/ziggurat/image/upload/v1462242500/g5ncq0mfqp2f8eh74tu7.jpg",
              author_id: 2,
              username: "Joseph",
              description: "the jam begins")
