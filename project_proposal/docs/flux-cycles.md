# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.


## Photos Cycles

### Photos API Request Actions

* `fetchAllPhotos`
  0. invoked from `PhotosIndex` `didMount`/`willReceiveProps`
  0. `GET /api/photos` is called.
  0. `receiveAllPhotos` is set as the callback.

* `createPhoto`
  0. invoked from new photo button `onClick` with form information.
  0. `POST /api/photos` is called.
  0. `receiveSinglePhoto` is set as the callback.

* `fetchSinglePhoto`
  0. invoked from `PhotoDetail` `didMount`/`willReceiveProps`
  0. `GET /api/photos/:id` is called.
  0. `receiveSinglePhoto` is set as the callback.

* `updatePhoto`
  0. invoked from `PhotoForm` `onSubmit` with input values.
  0. `POST /api/photos` is called.
  0. `receiveSinglePhoto` is set as the callback.

* `destroyPhoto`
  0. invoked from delete photo button `onClick`
  0. `DELETE /api/photos/:id` is called.
  0. `removePhoto` is set as the callback.

### Photos API Response Actions

* `receiveAllPhotos`
  0. invoked from an API callback.
  0. `Photo` store updates `_photos` and emits change.

* `receiveSinglePhoto`
  0. invoked from an API callback.
  0. `Photo` store updates `_photos[id]` and emits change.

* `removePhoto`
  0. invoked from an API callback.
  0. `Photo` store removes `_photos[id]` and emits change.

### Store Listeners

* `PhotosIndex` component listens to `Photo` store.
* `PhotoDetail` component listens to `Photo` store.

## Comments Cycles

### Comments API Request Actions

* `fetchPhotosComments`
  0. invoked from `CommentsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/photos/:id/comments` is called.
  0. `receiveRespectiveComments` is set as the callback.

* `createComment`
  0. invoked from new comment button `onClick` with form information.
  0. `POST /api/photos/:id/comments` is called.
  0. `receiveSingleComment` is set as the callback.

* `fetchSingleComment`
  0. invoked from `PhotoDetail` `didMount`/`willReceiveProps`
  0. `GET /api/photos/:id/comment/:id` is called.
  0. `receiveSingleComment` is set as the callback.

* `updateComment`
  0. invoked from `CommentForm` `onSubmit` with input values.
  0. `POST /api/photos/:id/Comments` is called.
  0. `receiveSingleComment` is set as the callback.

* `destroyComment`
  0. invoked from delete comment button `onClick`
  0. `DELETE /api/photos/:id/comments/:id` is called.
  0. `removeComment` is set as the callback.

### Comments API Response Actions

* `receiveAllRespectiveComments`
  0. invoked from an API callback.
  0. `Comment` store updates `_comments` and emits change.

* `receiveSingleComment`
  0. invoked from an API callback.
  0. `Comment` store updates `_comments[id]` and emits change.

* `removeComment`
  0. invoked from an API callback.
  0. `Comment` store removes `_comments[id]` and emits change.

### Store Listeners

* `CommentsIndex` component listens to `Comment` store.
* `CommentDetail` component listens to `Comment` store.


## Tags Cycles

### Tags API Request Actions

* `fetchTags`
  0. invoked from `TagsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/tags` is called.
  0. `receiveAllTags` is set as the callback.

* `createTag`
  0. invoked from new comment button `onClick` with form information.
  0. `POST /api/photos/:id/tags` is called.
  0. `receiveSingleTag` is set as the callback.  (???)
      // will this be better as receiveSpecificTags, as
         tags could potentially be created in groups, or
         will each individual tag invoke a callback?

* `fetchSingleTag`
  0. invoked from `PhotoDetail` `didMount`/`willReceiveProps`
  0. `GET /api/photos/:id/tag/:id` is called.
  0. `receiveSingleTag` is set as the callback.
      // Same question as posed in previous section.

* `destroyTag`
  0. invoked from delete tag button `onClick`
  0. `DELETE /api/photos/:id/tags/:id` is called.
  0. `removeTag` is set as the callback.

### Photos API Response Actions

* `receiveAllTags`
  0. invoked from an API callback.
  0. `Tag` store updates `_tags` and emits change.

* `receiveSingleTag`
  0. invoked from an API callback.
  0. `Tag` store updates `_tags[id]` and emits change.

* `removeTag`
  0. invoked from an API callback.
  0. `Tag` store removes `_tags[id]` and emits change.

### Store Listeners

* `TagsIndex` component listens to `Tag` store.
* `TagDetail` component listens to `Tag` store.

## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `PhotoSearchBar` `onChange` when there is text
  0. `GET /api/photos` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. `SearchSuggestion` store updates `_suggestions` and emits change.

* `removeSearchSuggestions`
  0. invoked from `PhotoSearchBar` `onChange` when empty
  0. `SearchSuggestion` store resets `_suggestions` and emits change.

### Store Listeners

* `SearchBarSuggestions` component listens to `SearchSuggestion` store.
