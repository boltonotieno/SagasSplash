[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)
[![Maintainability](https://api.codeclimate.com/v1/badges/32df02bd2dca67a0a05f/maintainability)](https://codeclimate.com/github/BoltC0rt3z/laughing-eureka/maintainability)


## Sagas Splash

Splash Images Application [Application](https://boltc0rt3z.github.io/SagasSplash/)


## Description

**sagas-splash** is an Image application that has consumed the [Unsplash](https://api.unsplash.com/photos/) API for awesome images.

### Dependencies

List of libraries, tools, etc needed (e.g. yarn, node.js, python, etc)

- [React.js](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Redux](https://redux.js.org/) - A Predictable State Container for JS Apps
- [Sagas](https://redux.js.org/) - A redux middleware library, that is designed to make handling side effects in your redux app nice and simple

- A package manager - [yarn](https://yarnpkg.com/lang/en/) or [NPM](https://www.npmjs.com/)

### Getting Started

- Clone the repo - `git clone https://github.com/BoltC0rt3z/SagasSplash.git`
- Change into the project directory
- Install project dependencies run `yarn install`
- Run the server `yarn start`


## Consumed Endpoints

In the project directory, you can get:

> Retrieve unplash photos.
- https://api.unsplash.com/photos/

### Example response:

```
[
   {
      "id":"Be8TdJZPaBE",
      "created_at":"2019-05-27T14:07:14-04:00",
      "updated_at":"2019-06-18T12:01:04-04:00",
      "width":8192,
      "height":5462,
      "color":"#F7FBFD",
      "description":null,
      "alt_description":"man on black cruiser motorcycle in highway",
      "urls":{  
         "raw":"https://images.unsplash.com/photo-1558980394-0a06c4631733?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjMzMTYwfQ",
         "full":"https://images.unsplash.com/photo-1558980394-0a06c4631733?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjMzMTYwfQ",
         "regular":"https://images.unsplash.com/photo-1558980394-0a06c4631733?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMzMTYwfQ",
         "small":"https://images.unsplash.com/photo-1558980394-0a06c4631733?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMzMTYwfQ",
         "thumb":"https://images.unsplash.com/photo-1558980394-0a06c4631733?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjMzMTYwfQ"
      },
      "links":{  
         "self":"https://api.unsplash.com/photos/Be8TdJZPaBE",
         "html":"https://unsplash.com/photos/Be8TdJZPaBE",
         "download":"https://unsplash.com/photos/Be8TdJZPaBE/download",
         "download_location":"https://api.unsplash.com/photos/Be8TdJZPaBE/download"
      },
      "categories":[  

      ],
      "sponsored":true,
      "sponsored_by":{  
         "id":"XnhDFu3Jr-A",
         "updated_at":"2019-06-18T23:39:59-04:00",
         "username":"harleydavidson",
         "name":"Harley-Davidson",
         "first_name":"Harley-Davidson",
         "last_name":"",
         "twitter_username":"harleydavidson",
         "portfolio_url":"https://www.harley-davidson.com/",
         "bio":"All for Freedom, Freedom for All. ",
         "location":"Milwaukee, WI",
         "links":{  
            "self":"https://api.unsplash.com/users/harleydavidson",
            "html":"https://unsplash.com/@harleydavidson",
            "photos":"https://api.unsplash.com/users/harleydavidson/photos",
            "likes":"https://api.unsplash.com/users/harleydavidson/likes",
            "portfolio":"https://api.unsplash.com/users/harleydavidson/portfolio",
            "following":"https://api.unsplash.com/users/harleydavidson/following",
            "followers":"https://api.unsplash.com/users/harleydavidson/followers"
         },
         "profile_image":{  
            "small":"https://images.unsplash.com/profile-1556751276456-1561737ea797?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
            "medium":"https://images.unsplash.com/profile-1556751276456-1561737ea797?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
            "large":"https://images.unsplash.com/profile-1556751276456-1561737ea797?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
         },
         "instagram_username":"harleydavidson",
         "total_collections":2,
         "total_likes":49,
         "total_photos":53,
         "accepted_tos":true
      },
      "sponsored_impressions_id":"4948122",
      "likes":38,
      "liked_by_user":false,
      "current_user_collections":[  

      ],
      "user":{  
         "id":"XnhDFu3Jr-A",
         "updated_at":"2019-06-18T23:39:59-04:00",
         "username":"harleydavidson",
         "name":"Harley-Davidson",
         "first_name":"Harley-Davidson",
         "last_name":"",
         "twitter_username":"harleydavidson",
         "portfolio_url":"https://www.harley-davidson.com/",
         "bio":"All for Freedom, Freedom for All. ",
         "location":"Milwaukee, WI",
         "links":{  
            "self":"https://api.unsplash.com/users/harleydavidson",
            "html":"https://unsplash.com/@harleydavidson",
            "photos":"https://api.unsplash.com/users/harleydavidson/photos",
            "likes":"https://api.unsplash.com/users/harleydavidson/likes",
            "portfolio":"https://api.unsplash.com/users/harleydavidson/portfolio",
            "following":"https://api.unsplash.com/users/harleydavidson/following",
            "followers":"https://api.unsplash.com/users/harleydavidson/followers"
         },
         "profile_image":{  
            "small":"https://images.unsplash.com/profile-1556751276456-1561737ea797?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
            "medium":"https://images.unsplash.com/profile-1556751276456-1561737ea797?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
            "large":"https://images.unsplash.com/profile-1556751276456-1561737ea797?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
         },
         "instagram_username":"harleydavidson",
         "total_collections":2,
         "total_likes":49,
         "total_photos":53,
         "accepted_tos":true
      },
      "sponsorship":{  
         "impressions_id":"4948122",
         "tagline":"Explore the world of H-D",
         "sponsor":{  
            "id":"XnhDFu3Jr-A",
            "updated_at":"2019-06-18T23:39:59-04:00",
            "username":"harleydavidson",
            "name":"Harley-Davidson",
            "first_name":"Harley-Davidson",
            "last_name":"",
            "twitter_username":"harleydavidson",
            "portfolio_url":"https://www.harley-davidson.com/",
            "bio":"All for Freedom, Freedom for All. ",
            "location":"Milwaukee, WI",
            "links":{  
               "self":"https://api.unsplash.com/users/harleydavidson",
               "html":"https://unsplash.com/@harleydavidson",
               "photos":"https://api.unsplash.com/users/harleydavidson/photos",
               "likes":"https://api.unsplash.com/users/harleydavidson/likes",
               "portfolio":"https://api.unsplash.com/users/harleydavidson/portfolio",
               "following":"https://api.unsplash.com/users/harleydavidson/following",
               "followers":"https://api.unsplash.com/users/harleydavidson/followers"
            },
            "profile_image":{  
               "small":"https://images.unsplash.com/profile-1556751276456-1561737ea797?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
               "medium":"https://images.unsplash.com/profile-1556751276456-1561737ea797?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
               "large":"https://images.unsplash.com/profile-1556751276456-1561737ea797?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
            },
            "instagram_username":"harleydavidson",
            "total_collections":2,
            "total_likes":49,
            "total_photos":53,
            "accepted_tos":true
         }
      }
   }
]
```

## License

This application is licensed under the terms of the [MIT License](https://github.com/BoltC0rt3z/SagasSplash/blob/develop/LICENSE)
