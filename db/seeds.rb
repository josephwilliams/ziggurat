User.create!(username: "guest", password: "password", email: "...", location: "USA")
User.create!(username: "Joseph", password: "password", email: "...", location: "San Francisco");
User.create!(username: "Tyler", password: "williams", email: "...", location: "Pittsburgh");
User.create!(username: "Adam", password: "password", email: "...", location: "Washington, D.C.");

users = []

20.times {
  user = User.create!(username: Faker::Internet.user_name,
                      password: "qwerty",
                      email: "...",
                      location: Faker::Address.city,
                      image_url: Faker::Avatar.image
                      )
         users << user
}

Photo.create!(image_url: "https://s3-us-west-1.amazonaws.com/ziggurat-1/1_SF_bridge.png",
              author_id: 2,
              username: "Joseph",
              description: "the bay")
Photo.create!(image_url: "https://s3-us-west-1.amazonaws.com/ziggurat-1/2_rustic_river.png",
              author_id: 2,
              username: "Joseph",
              description: "Tranquility")
Photo.create!(image_url: "https://s3-us-west-1.amazonaws.com/ziggurat-1/4_trees.png",
              author_id: 2,
              username: "Joseph",
              description: "palm trees..")
Photo.create!(image_url: "https://s3-us-west-1.amazonaws.com/ziggurat-1/3_carlisle_river.png",
              author_id: 2,
              username: "Joseph",
              description: "chill night on the river")
Photo.create!(image_url: "https://s3-us-west-1.amazonaws.com/ziggurat-1/6_funtime.png",
              author_id: 2,
              username: "Joseph",
              description: "the jam begins")
Photo.create!(image_url: "https://s3-us-west-1.amazonaws.com/ziggurat-1/5_building.png",
              author_id: rand(1..24),
              username: users.sample.username,
              description: Faker::Hipster.sentence)
Photo.create!(image_url: "https://s3-us-west-1.amazonaws.com/ziggurat-1/9_jellyfish.png",
              author_id: rand(1..24),
              username: users.sample.username,
              description: Faker::Hipster.sentence)
Photo.create!(image_url: "https://s3-us-west-1.amazonaws.com/ziggurat-1/8_table.png",
              author_id: rand(1..24),
              username: users.sample.username,
              description: Faker::Hipster.sentence)
Photo.create!(image_url: "https://s3-us-west-1.amazonaws.com/ziggurat-1/22_girl.png",
              author_id: rand(1..24),
              username: users.sample.username,
              description: Faker::Hipster.sentence)
Photo.create!(image_url: "https://s3-us-west-1.amazonaws.com/ziggurat-1/19_beach.png",
              author_id: rand(1..24),
              username: users.sample.username,
              description: Faker::Hipster.sentence)
Photo.create!(image_url: "https://s3-us-west-1.amazonaws.com/ziggurat-1/18_darkforest.png",
              author_id: rand(1..24),
              username: users.sample.username,
              description: Faker::Hipster.sentence)
Photo.create!(image_url: "https://s3-us-west-1.amazonaws.com/ziggurat-1/14_people.png",
              author_id: rand(1..24),
              username: users.sample.username,
              description: Faker::Hipster.sentence)
Photo.create!(image_url: "https://s3-us-west-1.amazonaws.com/ziggurat-1/13_car2.png",
              author_id: rand(1..24),
              username: users.sample.username,
              description: Faker::Hipster.sentence)
Photo.create!(image_url: "https://s3-us-west-1.amazonaws.com/ziggurat-1/12_quaint.png",
              author_id: rand(1..24),
              username: users.sample.username,
              description: Faker::Hipster.sentence)
Photo.create!(image_url: "https://s3-us-west-1.amazonaws.com/ziggurat-1/10_car.png",
              author_id: rand(1..24),
              username: users.sample.username,
              description: Faker::Hipster.sentence)
Photo.create!(image_url: "https://s3-us-west-1.amazonaws.com/ziggurat-1/11_city.png",
              author_id: rand(1..24),
              username: users.sample.username,
              description: Faker::Hipster.sentence)
# Photo.create!(image_url: "https://images.unsplash.com/photo-1454982523318-4b6396f39d3a?crop=entropy&dpr=2&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1025",
#               author_id: rand(1..24),
#               username: users.sample.username,
#               description: Faker::Hipster.sentence)
# Photo.create!(image_url: "https://images.unsplash.com/photo-1461301214746-1e109215d6d3?crop=entropy&dpr=2&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1025",
#               author_id: rand(1..24),
#               username: users.sample.username,
#               description: Faker::Hipster.sentence)
# Photo.create!(image_url: "https://images.unsplash.com/photo-1461529959205-ba7d61debd0b?crop=entropy&dpr=2&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1025",
#               author_id: rand(1..24),
#               username: users.sample.username,
#               description: Faker::Hipster.sentence)
# Photo.create!(image_url: "https://images.unsplash.com/photo-1461537236760-a9cb9d8ce48f?crop=entropy&dpr=2&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1025",
#               author_id: rand(1..24),
#               username: users.sample.username,
#               description: Faker::Hipster.sentence)
# Photo.create!(image_url: "https://images.unsplash.com/photo-1462118550146-9013de7806d5?crop=entropy&dpr=2&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1025",
#               author_id: rand(1..24),
#               username: users.sample.username,
#               description: Faker::Hipster.sentence)
# Photo.create!(image_url: "https://images.unsplash.com/photo-1461723198950-3f65e13bb031?crop=entropy&dpr=2&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1025",
#               author_id: rand(1..24),
#               username: users.sample.username,
#               description: Faker::Hipster.sentence)
# Photo.create!(image_url: "https://images.unsplash.com/photo-1462204215829-29407c570832?crop=entropy&dpr=2&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1025",
#               author_id: rand(1..24),
#               username: users.sample.username,
#               description: Faker::Hipster.sentence)
# Photo.create!(image_url: "https://images.unsplash.com/photo-1462293781490-9637490a111d?crop=entropy&dpr=2&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1025",
#               author_id: rand(1..24),
#               username: users.sample.username,
#               description: Faker::Hipster.sentence)
# Photo.create!(image_url: "https://images.unsplash.com/photo-1462400362591-9ca55235346a?crop=entropy&dpr=2&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1025",
#               author_id: rand(1..24),
#               username: users.sample.username,
#               description: Faker::Hipster.sentence)
# Photo.create!(image_url: "https://images.unsplash.com/photo-1462496506404-d0a540286070?crop=entropy&dpr=2&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1025",
#               author_id: rand(1..24),
#               username: users.sample.username,
#               description: Faker::Hipster.sentence)
# Photo.create!(image_url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?crop=entropy&dpr=2&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1025",
#               author_id: rand(1..24),
#               username: users.sample.username,
#               description: Faker::Hipster.sentence)
# Photo.create!(image_url: "https://images.unsplash.com/photo-1445600523100-d5b99b664bda?crop=entropy&dpr=2&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1025",
#               author_id: rand(1..24),
#               username: users.sample.username,
#               description: Faker::Hipster.sentence)
# Photo.create!(image_url: "https://images.unsplash.com/reserve/OQx70jjBSLOMI5ackhxm_urbex-ppc-030.jpg?crop=entropy&dpr=2&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1025",
#               author_id: rand(1..24),
#               username: users.sample.username,
#               description: Faker::Hipster.sentence)
# Photo.create!(image_url: "https://images.unsplash.com/reserve/rVvIisyfQwOhZv35PPhh_unsplash.jpg?crop=entropy&dpr=2&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1025",
#               author_id: rand(1..24),
#               username: users.sample.username,
#               description: Faker::Hipster.sentence)
# Photo.create!(image_url: "https://images.unsplash.com/photo-1415639636295-61ae91a98b39?crop=entropy&dpr=2&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1025",
#               author_id: rand(1..24),
#               username: users.sample.username,
#               description: Faker::Hipster.sentence)
# Photo.create!(image_url: "https://images.unsplash.com/photo-1416949929422-a1d9c8fe84af?crop=entropy&dpr=2&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1025",
#               author_id: rand(1..24),
#               username: users.sample.username,
#               description: Faker::Hipster.sentence)

300.times {
  Comment.create!(comment_body: Faker::Hipster.sentence,
                  photo_id: rand(1..33),
                  user_id: rand(1..24),
                  username: users.sample.username
  )
}
