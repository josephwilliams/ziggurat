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
Photo.create!(image_url: "https://images.unsplash.com/photo-1461409971633-aa0e46732112?crop=entropy&dpr=2&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1425",
              author_id: rand(1..24),
              username: users.sample.username,
              description: Faker::Hipster.sentence)
Photo.create!(image_url: "https://images.unsplash.com/photo-1458724029936-2cc6ee38f5ef?crop=entropy&dpr=2&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1025",
              author_id: rand(1..24),
              username: users.sample.username,
              description: Faker::Hipster.sentence)
Photo.create!(image_url: "https://images.unsplash.com/photo-1459664018906-085c36f472af?crop=entropy&dpr=2&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1375",
              author_id: rand(1..24),
              username: users.sample.username,
              description: Faker::Hipster.sentence)
Photo.create!(image_url: "https://images.unsplash.com/photo-1440227537815-f4476b789291?crop=entropy&dpr=2&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1025",
              author_id: rand(1..24),
              username: users.sample.username,
              description: Faker::Hipster.sentence)
Photo.create!(image_url: "https://images.unsplash.com/photo-1428189923803-e9801d464d76?crop=entropy&dpr=2&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1025",
              author_id: rand(1..24),
              username: users.sample.username,
              description: Faker::Hipster.sentence)
Photo.create!(image_url: "https://images.unsplash.com/photo-1456318019777-ccdc4d5b2396?crop=entropy&dpr=2&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1025",
              author_id: rand(1..24),
              username: users.sample.username,
              description: Faker::Hipster.sentence)
Photo.create!(image_url: "https://images.unsplash.com/photo-1455098934982-64c622c5e066?crop=entropy&dpr=2&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1025",
              author_id: rand(1..24),
              username: users.sample.username,
              description: Faker::Hipster.sentence)
Photo.create!(image_url: "https://images.unsplash.com/reserve/eNu5TtyHRnWf9627TvZN_IMG_7791.JPG?crop=entropy&dpr=2&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1025",
              author_id: rand(1..24),
              username: users.sample.username,
              description: Faker::Hipster.sentence)
Photo.create!(image_url: "https://images.unsplash.com/photo-1422393462206-207b0fbd8d6b?crop=entropy&dpr=2&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1025",
              author_id: rand(1..24),
              username: users.sample.username,
              description: Faker::Hipster.sentence)
Photo.create!(image_url: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?crop=entropy&dpr=2&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1025",
              author_id: rand(1..24),
              username: users.sample.username,
              description: Faker::Hipster.sentence)
Photo.create!(image_url: "https://images.unsplash.com/photo-1432637194732-34cedd856522?crop=entropy&dpr=2&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1025",
              author_id: rand(1..24),
              username: users.sample.username,
              description: Faker::Hipster.sentence)
Photo.create!(image_url: "https://images.unsplash.com/reserve/O7A9fAvYSXC7NTdz8gLQ_IMGP1039.jpg?crop=entropy&dpr=2&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1025",
              author_id: rand(1..24),
              username: users.sample.username,
              description: Faker::Hipster.sentence)
Photo.create!(image_url: "https://images.unsplash.com/photo-1454982523318-4b6396f39d3a?crop=entropy&dpr=2&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1025",
              author_id: rand(1..24),
              username: users.sample.username,
              description: Faker::Hipster.sentence)
Photo.create!(image_url: "https://images.unsplash.com/photo-1461301214746-1e109215d6d3?crop=entropy&dpr=2&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1025",
              author_id: rand(1..24),
              username: users.sample.username,
              description: Faker::Hipster.sentence)
Photo.create!(image_url: "https://images.unsplash.com/photo-1461529959205-ba7d61debd0b?crop=entropy&dpr=2&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1025",
              author_id: rand(1..24),
              username: users.sample.username,
              description: Faker::Hipster.sentence)
Photo.create!(image_url: "https://images.unsplash.com/photo-1461537236760-a9cb9d8ce48f?crop=entropy&dpr=2&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1025",
              author_id: rand(1..24),
              username: users.sample.username,
              description: Faker::Hipster.sentence)
Photo.create!(image_url: "https://images.unsplash.com/photo-1462118550146-9013de7806d5?crop=entropy&dpr=2&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1025",
              author_id: rand(1..24),
              username: users.sample.username,
              description: Faker::Hipster.sentence)
Photo.create!(image_url: "https://images.unsplash.com/photo-1461723198950-3f65e13bb031?crop=entropy&dpr=2&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1025",
              author_id: rand(1..24),
              username: users.sample.username,
              description: Faker::Hipster.sentence)
Photo.create!(image_url: "https://images.unsplash.com/photo-1462204215829-29407c570832?crop=entropy&dpr=2&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1025",
              author_id: rand(1..24),
              username: users.sample.username,
              description: Faker::Hipster.sentence)
Photo.create!(image_url: "https://images.unsplash.com/photo-1462293781490-9637490a111d?crop=entropy&dpr=2&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1025",
              author_id: rand(1..24),
              username: users.sample.username,
              description: Faker::Hipster.sentence)
Photo.create!(image_url: "https://images.unsplash.com/photo-1462400362591-9ca55235346a?crop=entropy&dpr=2&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1025",
              author_id: rand(1..24),
              username: users.sample.username,
              description: Faker::Hipster.sentence)
Photo.create!(image_url: "https://images.unsplash.com/photo-1462496506404-d0a540286070?crop=entropy&dpr=2&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1025",
              author_id: rand(1..24),
              username: users.sample.username,
              description: Faker::Hipster.sentence)
Photo.create!(image_url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?crop=entropy&dpr=2&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1025",
              author_id: rand(1..24),
              username: users.sample.username,
              description: Faker::Hipster.sentence)
Photo.create!(image_url: "https://images.unsplash.com/photo-1445600523100-d5b99b664bda?crop=entropy&dpr=2&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1025",
              author_id: rand(1..24),
              username: users.sample.username,
              description: Faker::Hipster.sentence)
Photo.create!(image_url: "https://images.unsplash.com/reserve/OQx70jjBSLOMI5ackhxm_urbex-ppc-030.jpg?crop=entropy&dpr=2&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1025",
              author_id: rand(1..24),
              username: users.sample.username,
              description: Faker::Hipster.sentence)
Photo.create!(image_url: "https://images.unsplash.com/reserve/rVvIisyfQwOhZv35PPhh_unsplash.jpg?crop=entropy&dpr=2&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1025",
              author_id: rand(1..24),
              username: users.sample.username,
              description: Faker::Hipster.sentence)
Photo.create!(image_url: "https://images.unsplash.com/photo-1415639636295-61ae91a98b39?crop=entropy&dpr=2&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1025",
              author_id: rand(1..24),
              username: users.sample.username,
              description: Faker::Hipster.sentence)
Photo.create!(image_url: "https://images.unsplash.com/photo-1416949929422-a1d9c8fe84af?crop=entropy&dpr=2&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1025",
              author_id: rand(1..24),
              username: users.sample.username,
              description: Faker::Hipster.sentence)

300.times {
  Comment.create!(comment_body: Faker::Hipster.sentence,
                  photo_id: rand(1..33),
                  user_id: rand(1..24),
                  username: users.sample.username
  )
}
