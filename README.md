# Ziggurat

[Ziggurat live][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.ziggurat.me

Ziggurat is a web application inspired by various online photo-sharing communities, including 500px, Instagram, and Imgur.  Utilizing Ruby on Rails for backend functionality and React.js for frontend charm and intrigue, Ziggurat will allow users to delve into photo-sharing with a new degree of freedom and fun in a visually-appealing aesthetic.

![image of Ziggurat](http://res.cloudinary.com/ziggurat/image/upload/v1462580299/kdpukscgjp9kft3dppab.png)

## Features & Implementation

Ziggurat offers a multitude of features, allowing users to interact with the site at varying degrees of engagement.  At the most basic level, users can create an account or log in as a demo user.  Once authenticated, users can upload their own photos or browse through Ziggurat's collection.  Each photo can be liked by clicking on the well-established heart symbol, tagged via key words - and made searchable through these tags, and commented on, allowing users to provide more in-depth thoughts on the subject matter or to interact with one another.

### Multi-page App with Single Page Features

Ziggurat is a multi-page app with dynamic single-page components, dependent on React.js and its ever-flowing, change-emitting Flux loop.  The moment a user interacts with a photo, be it through likes, tags, or comments, a call to the database is made via an AJAX request, and the resulting change appears instantly.  Meanwhile, in the backend, Ruby on Rails maintains secure information through BCrypt and frequent API calls to a Sessions Controller to check the status of the current user.


### Photo Comments

On the database side, photo comments are stored in one table that includes columns for 'id', 'user_id', 'photo_id', 'username', and timestamps.  Comments are rendered on their respective photo page, based on the photo_id param of that page.  Each comment includes the name of its author, the comment body, and the time (the 'created_at' table of the database) the comment was made.

![image of Photo](http://res.cloudinary.com/ziggurat/image/upload/v1462580289/tmrai4cwhoyyilygvn3j.png)

### Photo Likes

Likes are stored with photo objects in the PhotoStore, linked very simply via a 'photo_id', 'id', and timestamps.  While this adds extra information to any liked photo object, it avoids the necessity of a separate likes store.  However, via associations, likes and photos can behave dynamically, and provide relatively simple but interesting information, including the count of likes on any given photo, and the time and 'username' of the photo's liker.

### Photo Tags

Photo tags exist through a Tags table in the database.  This table includes only 'name', 'id', and timestamps.  They are linked to photos through a separate 'Tagging' join table, which holds 'user_id', and 'tag_d' and timestamps.

### Explore

![image of Explore](http://res.cloudinary.com/ziggurat/image/upload/v1462580296/bkuzmh9aglhouqbhoyzv.png)

The Explore page was key to my app.  It exists through a request to the Photo API, resulting in the PhotoStore receiving all of the photos from the database.  At this point, each photo is passed as a prop to a photo item that contains a photo's 'id', 'image_url', 'thumbnail_url', 'author_id', 'username', 'width', 'height', and, more dynamically, dependent on associations within the 'Photo Model', 'likes', 'likers' (users that have liked the photo), 'like_count', 'tags' (the 'name' and 'id' of each tag, linked through the 'Taggings' join table), 'tag_count', and 'comment_count'.

The dynamic photo items are then rendered in an orderly, aesthetic fashion with the masonry react module.

The search feature also depends on the explore page, intaking a query string, utilizing a backend SQL command in the Photo Controller to find photos associated to the tags listed in the string, and displaying said photos.  (shown below)

```ruby
def search
  search_tags = Tag.where("name LIKE?", "#{params[:search]}")
  @photos = search_tags.map { |tag| tag.photos }.flatten
end
```

## Future Directions for the Project

In addition to the features already implemented, I plan to continue work on this project.  The next steps for Ziggurat are outlined below.

### User Profiles

Users will, upon authentication via a sign up process, be redirected to a user page, wherein they can upload a profile photo, update their information, including location and description - both of which are already included in the the Users table in the database, and track their liked photos.

### Emoji-based Likes

Photo-Likes have become a standard if not basic expectation of photo-sharing sites.  This can be improved upon by including different kinds of likes, similar to Facebook's recent implementation of various reactions to User statuses.  This implementation could be improved upon further by allowing users to filter through photos based on the emoji they've chosen for that given photo, or that photo's predominant emoji (based on other users' input).
