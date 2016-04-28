# Ziggurat

##Minimum Viable Product
Ziggurat is a web application inspired by various online photo-sharing communities, including 500px, Instagram, and Imgur.  Utilizing Ruby on Rails for backend functionality and React.js for frontend charm and intrigue, Ziggurat will allow users to delve into photo-sharing with a new degree of freedom and fun in a visually-appealing aesthetic.  By the end of Week 9 (Friday, May 6th), this project will satisfy, at minimum, the following criteria:

 - [ ] New account creation, login, and guest/demo login, as well as user options, including profile customization and photo preferences.
 - [ ] Smooth, bug-free navigation
 - [ ] Adequate seed data to demonstrate the site's features
 - [ ] The minimally necessary features for a 500px-inspired site: photo uploading, browsing, gallery creation, and client-side preferencing, i.e. choosing your favorite photos.
 - [ ] Hosting on Heroku
 - [ ] CSS styling that is satisfactorily visually appealing
 - [ ] A production README, replacing this README

## Product Goals and Priorities
Ziggurat will allow users to do the following:
  - [x] Create an account (MVP)
  - [ ] Customize one’s user profile
  - [x] Log in / Log out, including as a Guest/Demo User (MVP)
  - [ ] Upload, edit the information of, browse (share), and like/comment photos (MVP)
  - [ ] Organize photos within galleries (MVP)
  - [ ] Tag photos with multiple tags and/or emojis (expected feature, but not MVP)

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[flux-cycles]: ./docs/flux-cycles.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend Setup and User Authentication (0.5 days)
**Objective:** functioning Ruby on Rails project with Authentication, basic page layout
 - [x] Create new Ruby on Rails project
 - [x] Create User model
 - [x] Establish functioning authentication
 - [x] Ensure functional User Login and Signup pages
 - [x] Create landing page upon successful signup or login

### Phase 2: Photo Model, API, and basic APIUtil (1.5 days)
**Objective:** Photos can be created, viewed (read), edited (their info), and destroyed through the API.

 - [ ] Create Photo model
 - [] Seed the database with test data (some decent photos)
 - [ ] CRUD API for photos (PhotosController)
 - [ ] Construct jBuilder views for Photos
 - [x] Setup Webpack and Flux scaffold
 - [x] Setup APIUtil to interact with the API
 - [x] Test out API Interaction in the console; ensure basic functionality

###Phase 3: Flux Architecture and Router (1.5 days)
**Objective:** User API works with Photos.

 - [x] Setup the Flux loop with skeleton files
 - [x] Setup React Router
 - [ ] Implement each Photo component, building out the Flux loop as needed.
 - [ ] PhotoIndex
 - [ ] PhotoIndexItem
 - [ ] PhotoForm
 - [x] Further Implement the User component, building out the Flux loop as needed.
 - [ ] UserIndex
 - [ ] UserIndexItem

###Phase 4: Start Styling (1.5 days) (total: 5 days)
**Objective:** Existing pages have uniformity and quality of design. These pages will include the following:

 - [x] Splash page, including login and site information
 - [ ] User profile
 - [x] Sign Up page
 - [ ] “Flow” page (like Facebook’s wall or the Instagram infinite scroll photos page)
 - [ ] Search Page

I will implement CSS in order to:
Position elements aesthetically on the page, ensuring general uniformity, navigability, and responsiveness despite browser window size or screen resolution.
Add basic colors and stylistic elements.

###Phase 5: Photo information customization (1.5 day)
**Objective:** Photos have tags, can be liked, contain user info, and perhaps other features, including a revolutionary new emoji-based like system, similar to Facebook’s recent addition to status liking.

 - [ ] Create a Tag model and join table
 - [ ] Build out API, Flux loop, and components for:
 - [ ] Adding tags to photos
 - [ ] Searching photos by tag
 - [ ] Create a “liked” model and join table
 - [ ] Build out similar features to the tag, but with a boolean-like “liked” or          “not-liked” system
 - [ ] Style new elements

###Phase 6: User comments on notes (1.5 day)
**Objective:** Implement a highly functional user commentary system on photos.

 - [ ] Create a Comment model and join table
 - [ ] Build out API, Flux Loop, and components for:
 - [ ] Adding comments to photos
 - [ ] Editing and Deleting comments
 - [ ] Style new elements (regarding how the comment feature will look)

###Phase 7: Ensure highly functional Search (1 day)
**Objective:** self-explanatory.

 - [ ] Establish discreet search filters, such as liked vs. not-liked, by tag, by user, or by photo title, (and potentially by emoji)

###Phase 8: Styling Cleanup and Seeding (1 day)
**Objective:** Make the site feel more cohesive and visually stunning.

 - [ ] Get feedback on my UI from others
 - [ ] Refactor HTML classes and CSS rules
 - [ ] Add modals, transitions, and other styling flourishes

BONUS Features (TBD)

 - [ ] Pagination / infinite scroll for photos “flow” page
 - [ ] The oft-spoken of emoji-based search and tag system
 - [ ] Sexy CSS magic, including the 500px-esque floating top bar that stays with the page despite scrolldown/up.

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
[phase-six]: ./docs/phases/phase6.md
[phase-seven]: ./docs/phases/phase7.md
