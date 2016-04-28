# Phase 3: Notebooks and Tags (2 days)

## Rails
### Models

### Controllers
* Api::PhotosController (create, destroy, index, show, update)
* Api::UsersController (create, destroy, index, show, update)

### Views
* PhotosIndex
* UsersIndex

## Flux
### Views (React Components)
* PhotoForm
* PhotosIndex
* PhotoShow

### Stores
* Users
* Photos

### Actions
* ApiActions.receiveAllPhotos -> triggered by ApiUtil
* ApiActions.receiveSinglePhoto
* ApiActions.deletePhoto
* PhotoActions.fetchAllPhotos -> triggers ApiUtil
* PhotoActions.fetchSinglePhoto
* PhotoActions.createPhoto
* PhotoActions.editPhoto
* PhotoActions.destroyPhoto


### ApiUtil
* ApiUtil.fetchAllPhotos
* ApiUtil.fetchSinglePhoto
* ApiUtil.createPhoto
* ApiUtil.editPhoto
* ApiUtil.destroyPhoto

## Gems/Libraries
