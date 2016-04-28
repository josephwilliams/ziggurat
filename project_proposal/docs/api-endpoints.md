# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Photos

- `GET /api/photos`
  - Photos index/search
  - accepts `#` query param to list notes by tag
  - accepts pagination params (if I get there)
- `POST /api/photos`
- `GET /api/photos/:id`
- `PATCH /api/photos/:id`
- `DELETE /api/photos/:id`

### Tags

- A photo's tags will be included in the photo show template
- `GET /api/tags`
  - includes query param for typeahead suggestions
- `POST /api/photos/:photo_id/tags`: add tag to photo by name
- `DELETE /api/photos/:photo_id/tags/:tag_name`: remove tag from note by name

### Likes
- A photo's likes will be included in the photo show template
- Likes will be included between photos and users via join table

### Comments
- A photo's comments will be included in the photo show template
- Comments will be included between photos and users via join table
