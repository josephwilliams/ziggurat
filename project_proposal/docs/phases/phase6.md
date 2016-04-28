# Phase 5: Reminders and Garbage Collection

## Rails
### Models
* Comment

### Controllers
* Api::CommentsController (create, destroy, index, show, update)

### Views

## Flux
### Views (React Components)
* CommentsForm
* CommentsShow

### Stores
* Comments

### Actions
* ApiActions.receiveAllComments -> triggered by ApiUtil
* ApiActions.receiveSingleComment
* ApiActions.deleteComment
* CommentActions.fetchAllComment -> triggers ApiUtil
* CommentActions.fetchSingleComment
* CommentActions.createComment
* CommentActions.updateComment
* CommentActions.destroyComment

### ApiUtil
* ApiUtil.fetchAllComment
* ApiUtil.fetchSingleComment
* ApiUtil.createComment
* ApiUtil.updateComment
* ApiUtil.destroyComment

## Gems/Libraries
