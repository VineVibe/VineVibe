# Project 3 Cooper, Jessé, Mathijs, Thea

## Getting started

```
yarn install
yarn run dev;all
```

## Description

Describe your project in one/two lines.

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **500:** As an anon/user I can see a 500 page when the developers broke something, so that I know that is not my fault
-  **Signup:** As an anon I can sign up in the platform so that I can start saving favorite restaurants
-  **Login:** As a user I can login to the platform so that I can see my favorite restaurants
-  **Logout:** As a user I can logout from the platform so no one else can use it
-  **Add Wine** As a user I can add a new pool so that I can share it with friends
-  **List Members** As a user I want to see the list of all the wines 
-  **Search Wines** As a user I want to search wines by name, variety and country

## Backlog

User profile:
- see other users profile, and their wine types

Setting up Third Party Wines:
- Morality is as importanrt as avoiding pyramid schemes that sell drugs
  
# Client

## Routes

- / - Homepage
- /auth/signup - Signup form
- /auth/login - Login form
- /wines - wines list
- /wines/create - create a wines
- /wines/:id - restaurant detail
- /profile/me - my details and favorite wines
- 404

## Pages

- Home Page (public)
- Sign in Page (anon only)
- Log in Page (anon only)
- Wine List Page (public only)
- Wine Create (user only)
- Wine Detail Page (public only)
- My Profile Page (user only)
- 404 Page (public)

## Components

- Wine Card component
  - Input: wine: any
  - Output: favorite(wineId: string, on: boolean)
- Search component
  - Output: change(terms: string)

## IO


## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous
- Wine Service
  - wine.list()
  - wine.create(data)
  - wine.detail(id)
  - wine.addFavorite(id)
  - wine.removeFavorite(id)   

# Server

## Models

User model

```
username - String // required
email - String // required & unique
password - String // required
favorites - [ObjectID<Wine>]
```

Wine model

```
owner - ObjectID<User> // required
name - String // required
phone - String
address - String
```

## API Endpoints/Backend Routes

- GET /auth/me
- POST /auth/signup
  - body:
    - username
    - email
    - password
- POST /auth/login
  - body:
    - username
    - password
- POST /auth/logout
  - body: (empty)
- POST /user/me/favorite
  - body:
    - wineId
- DELETE /user/me/favorite/:wineId
  - body: (empty)
- GET /wine
- POST /wine
  - body:
    - name
    - phone
    - address
- GET /wine/:id

  

## Links

### Trello/Kanban

[Trello](https://trello.com/b/ClH5Bn4q/project-3) 

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com)

[Server repository Link](http://github.com)

[Deploy Link](http://heroku.com)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)
