# Schema Information

## photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    |
description | string    |
photo_url   | string    | not null
author_id   | integer   | not null, foreign key (references users), indexed

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
user_id     | integer   | not null, foreign key (references users), indexed
photo_id     | string    | not null, foreign key (references notes), indexed
date        | datetime  | not null

## photolikes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
type        | string    | not null (could make this a boolean)
photo_id    | integer   | not null, foreign key (references notes), indexed, unique [tag_id]
photo_id      | integer   | not null, foreign key (references tags), indexed

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
photo_id    | integer   | not null, foreign key (references notes), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
description     | string    |
location        | string    |
image_url       | string    |
