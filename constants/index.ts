// Major Cities in the United States
export const cities = [
  'New York City',
  'Los Angeles',
  'Chicago',
  'Houston',
  'Phoenix',
  'Philadelphia',
  'San Antonio',
  'San Diego',
  'Dallas',
  'San Jose',
  'Austin',
  'Jacksonville',
  'San Francisco',
  'Indianapolis',
  'Columbus',
  'Fort Worth',
  'Charlotte',
  'Seattle', 
  'Denver',
  'El Paso',
  'Detroit',
  'Washington, D.C.',
  'Boston',
  'Memphis',
  'Nashville',
  'Portland',
  'Oklahoma City',
  'Las Vegas',
  'Baltimore',
  'Louisville',
  'Milwaukee',
  'Albuquerque',
  'Tucson',
  'Fresno',
  'Sacramento',
  'Kansas City',
  'Long Beach',
  'Mesa',
  'Atlanta',
  'Colorado Springs',
  'Raleigh',
  'Miami',
  'Oakland',
  'Minneapolis',
  'Tampa',
  'Tulsa',
  'Cleveland',
  
];

// Seattle has been added back to the list of major cities in the United States.


export const cuisines = [
  { title: 'All Cuisines', value: 'all-cuisines' },
  { title: 'American', value: 'american' },
  { title: 'Italian', value: 'italian' },
  { title: 'Mexican', value: 'mexican' },
  { title: 'Asian', value: 'asian' },
  { title: 'Indian', value: 'indian' },
  { title: 'Mediterranean', value: 'mediterranean' },
  { title: 'Japanese', value: 'japanese' },
  { title: 'Chinese', value: 'chinese' },
  { title: 'Thai', value: 'thai' },
];

export const priceRanges = [
  { title: 'Any Price Range', value: 'any-price-range' },
  { title: '$', value: 'dollar' },
  { title: '$$', value: 'dollar-dollar' },
  { title: '$$$', value: 'dollar-dollar-dollar' },
  { title: '$$$$', value: 'dollar-dollar-dollar-dollar' },
];

export const ratings = [
  { title: 'Any Rating', value: 'any-rating' },
  { title: '2.0 stars and up', value: '2-stars-up' },
  { title: '2.5 stars and up', value: '2.5-stars-up' },
  { title: '3.0 stars and up', value: '3-stars-up' },
  { title: '3.5 stars and up', value: '3.5-stars-up' },
  { title: '4.0 stars and up', value: '4-stars-up' },
  { title: '4.5 stars and up', value: '4.5-stars-up' },
];

export const deliveryOptions = [
  { title: 'Any Delivery Option', value: 'any-delivery-option' },
  { title: 'Delivery', value: 'delivery' },
  { title: 'Takeout', value: 'takeout' },
  { title: 'Dine-In', value: 'dine-in' },
];

export const sortByOptions = [
  { title: 'Best Match', value: 'best-match' },
  { title: 'Rating', value: 'rating' },
  { title: 'Price (Low to High)', value: 'price-low-to-high' },
  { title: 'Price (High to Low)', value: 'price-high-to-low' },
  { title: 'Distance', value: 'distance' },
];

// These arrays include objects with 'title' and 'value' properties for each option.

export const footerLinks = [
  {
    title: "About",
    links: [
      { title: "How it works", url: "/" },
      { title: "Featured", url: "/" },
      { title: "Partnership", url: "/" },
      { title: "Bussiness Relation", url: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "Events", url: "/" },
      { title: "Blog", url: "/" },
      { title: "Podcast", url: "/" },
      { title: "Invite a friend", url: "/" },
    ],
  },
  {
    title: "Socials",
    links: [
      { title: "Discord", url: "/" },
      { title: "Instagram", url: "/" },
      { title: "Twitter", url: "/" },
      { title: "Facebook", url: "/" },
    ],
  },
];

export const APIdata =  {
  "status": true,
  "message": "Success",
  "timestamp": 1695438839608,
  "data": {
    "totalRecords": 3758,
    "totalPages": 125,
    "data": [
      {
        "restaurantsId": "Restaurant_Review-g60878-d4765938-Reviews-Pizzeria_Credo-Seattle_Washington",
        "locationId": 4765938,
        "name": "Pizzeria Credo",
        "averageRating": 5,
        "userReviewCount": 223,
        "currentOpenStatusCategory": "OPEN",
        "currentOpenStatusText": "Open Now",
        "priceTag": "$$ - $$$",
        "hasMenu": true,
        "menuUrl": "http://pizzeriacredo.com/#our-menu",
        "isDifferentGeo": false,
        "parentGeoName": "Seattle",
        "distanceTo": null,
        "awardInfo": {
          "year": 2022,
          "awardType": "COE"
        },
        "isLocalChefItem": false,
        "isPremium": false,
        "isStoryboardPublished": false,
        "establishmentTypeAndCuisineTags": [
          "Italian",
          "Pizza"
        ],
        "offers": {
          "hasDelivery": true,
          "hasReservation": false,
          "slot2Offer": null,
          "restaurantSpecialOffer": null,
          "slot1Offer": {
            "providerId": "13712",
            "provider": "Grubhub",
            "providerDisplayName": "Grubhub",
            "buttonText": "Order online",
            "offerURL": "emFpXy9Db21tZXJjZT9wPUdydWJodWImc3JjPTEyMzM1MjM5MyZnZW89NDc2NTkzOCZmcm9tPVJlc3RhdXJhbnRzJmFyZWE9cmVzZXJ2YXRpb25fYnV0dG9uJnNsb3Q9MSZtYXRjaElEPTEmb29zPTAmY250PTEmc2lsbz0yNTc2OCZidWNrZXQ9ODUyNTA4Jm5yYW5rPTEmY3Jhbms9MSZjbHQ9UiZ0dHlwZT1SZXN0YXVyYW50JnRtPTI3NTM1MDQzOSZtYW5hZ2VkPWZhbHNlJmNhcHBlZD1mYWxzZSZnb3NveD1JLUFEbGc3d1k4bHFFcTkyaEdPQ1BIOXl4S2FvNGZuSnRvWWRkNVRMY3RvQ1ZLMkVhcWNDaTlyT01yVUN5RWJ5TWt5THN2dmJreVpvX1RxUktVVXJOaXZOTUhHbldDZk5NellDMjRtSUo0ZyZjcz0xYWYzYTVkOTA4ZTY3MWIyYjc4MThjNjJkZmE1MDYyN2VfeWN6",
            "logoUrl": "/img2/branding/hotels/grubhub_05.11.2022.png",
            "trackingEvent": "order_online_click",
            "canProvideTimeslots": false,
            "canLockTimeslots": false,
            "timeSlots": []
          }
        },
        "heroImgUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/fa/b9/65/polanta.jpg?w=2100&h=1800&s=1",
        "heroImgRawHeight": 1803,
        "heroImgRawWidth": 2157,
        "squareImgUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/fa/b9/65/polanta.jpg?w=200&h=200&s=1",
        "squareImgRawLength": 0,
        "thumbnail": {
          "photo": {
            "photoSizeDynamic": {
              "urlTemplate": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/fa/b9/65/polanta.jpg?w={width}&h={height}&s=1",
              "maxHeight": 1803,
              "maxWidth": 2157
            },
            "photoSizes": [
              {
                "width": 0,
                "height": 0,
                "url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/fa/b9/65/polanta.jpg?w=100&h=100&s=1"
              },
              {
                "width": 50,
                "height": 50,
                "url": "https://media-cdn.tripadvisor.com/media/photo-t/09/fa/b9/65/polanta.jpg"
              },
              {
                "width": 150,
                "height": 150,
                "url": "https://media-cdn.tripadvisor.com/media/photo-l/09/fa/b9/65/polanta.jpg"
              },
              {
                "width": 245,
                "height": 205,
                "url": "https://media-cdn.tripadvisor.com/media/photo-f/09/fa/b9/65/polanta.jpg"
              },
              {
                "width": 538,
                "height": 450,
                "url": "https://media-cdn.tripadvisor.com/media/photo-s/09/fa/b9/65/polanta.jpg"
              },
              {
                "width": 1024,
                "height": 855,
                "url": "https://media-cdn.tripadvisor.com/media/photo-w/09/fa/b9/65/polanta.jpg"
              },
              {
                "width": 2157,
                "height": 1803,
                "url": "https://media-cdn.tripadvisor.com/media/photo-o/09/fa/b9/65/polanta.jpg"
              }
            ]
          }
        },
        "reviewSnippets": {
          "reviewSnippetsList": [
            {
              "reviewText": "The ala sata is a half pizza half ￹calzone￻ and it is just so amazing as well.",
              "reviewUrl": "https://www.tripadvisor.com/ShowUserReviews-g60878-d4765938-r850276554-Pizzeria_Credo-Seattle_Washington.html"
            },
            {
              "reviewText": "We ordered the Credo salad, a margherita...",
              "reviewUrl": "https://www.tripadvisor.com/ShowUserReviews-g60878-d4765938-r799834606-Pizzeria_Credo-Seattle_Washington.html"
            }
          ]
        }
      },
      {
        "restaurantsId": "Restaurant_Review-g60878-d463486-Reviews-The_Pink_Door-Seattle_Washington",
        "locationId": 463486,
        "name": "The Pink Door",
        "averageRating": 4.5,
        "userReviewCount": 2915,
        "currentOpenStatusCategory": "OPEN",
        "currentOpenStatusText": "Open Now",
        "priceTag": "$$ - $$$",
        "hasMenu": true,
        "menuUrl": "https://www.thepinkdoor.net/menus",
        "isDifferentGeo": false,
        "parentGeoName": "Seattle",
        "distanceTo": null,
        "awardInfo": {
          "year": 2022,
          "awardType": "COE"
        },
        "isLocalChefItem": false,
        "isPremium": false,
        "isStoryboardPublished": false,
        "establishmentTypeAndCuisineTags": [
          "Italian",
          "Contemporary",
          "Tuscan",
          "Central-Italian"
        ],
        "offers": {
          "hasDelivery": null,
          "hasReservation": null,
          "slot1Offer": null,
          "slot2Offer": null,
          "restaurantSpecialOffer": null
        },
        "heroImgUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/f3/0e/0c/the-pink-door-back-dining.jpg?w=1000&h=700&s=1",
        "heroImgRawHeight": 750,
        "heroImgRawWidth": 1000,
        "squareImgUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/f3/0e/0c/the-pink-door-back-dining.jpg?w=200&h=200&s=1",
        "squareImgRawLength": 0,
        "thumbnail": {
          "photo": {
            "photoSizeDynamic": {
              "urlTemplate": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/f3/0e/0c/the-pink-door-back-dining.jpg?w={width}&h={height}&s=1",
              "maxHeight": 750,
              "maxWidth": 1000
            },
            "photoSizes": [
              {
                "width": 0,
                "height": 0,
                "url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/f3/0e/0c/the-pink-door-back-dining.jpg?w=100&h=100&s=1"
              },
              {
                "width": 50,
                "height": 50,
                "url": "https://media-cdn.tripadvisor.com/media/photo-t/16/f3/0e/0c/the-pink-door-back-dining.jpg"
              },
              {
                "width": 150,
                "height": 150,
                "url": "https://media-cdn.tripadvisor.com/media/photo-l/16/f3/0e/0c/the-pink-door-back-dining.jpg"
              },
              {
                "width": 180,
                "height": 200,
                "url": "https://media-cdn.tripadvisor.com/media/photo-i/16/f3/0e/0c/the-pink-door-back-dining.jpg"
              },
              {
                "width": 250,
                "height": 188,
                "url": "https://media-cdn.tripadvisor.com/media/photo-f/16/f3/0e/0c/the-pink-door-back-dining.jpg"
              },
              {
                "width": 550,
                "height": 413,
                "url": "https://media-cdn.tripadvisor.com/media/photo-s/16/f3/0e/0c/the-pink-door-back-dining.jpg"
              },
              {
                "width": 1000,
                "height": 750,
                "url": "https://media-cdn.tripadvisor.com/media/photo-o/16/f3/0e/0c/the-pink-door-back-dining.jpg"
              }
            ]
          }
        },
        "reviewSnippets": {
          "reviewSnippetsList": [
            {
              "reviewText": "... to get in I highly recommend their ahi tuna crudo and their famous ￹lasagna￻.",
              "reviewUrl": "https://www.tripadvisor.com/ShowUserReviews-g60878-d463486-r905826124-The_Pink_Door-Seattle_Washington.html"
            },
            {
              "reviewText": "... day which was ￹salmon￻ cooked to perf...",
              "reviewUrl": "https://www.tripadvisor.com/ShowUserReviews-g60878-d463486-r898274154-The_Pink_Door-Seattle_Washington.html"
            }
          ]
        }
      },
      {
        "restaurantsId": "Restaurant_Review-g60878-d13010720-Reviews-All_Water_Seafood_Oyster_Bar-Seattle_Washington",
        "locationId": 13010720,
        "name": "All Water Seafood & Oyster Bar",
        "averageRating": 4.5,
        "userReviewCount": 158,
        "currentOpenStatusCategory": "OPEN",
        "currentOpenStatusText": "Open Now",
        "priceTag": "$$ - $$$",
        "hasMenu": true,
        "menuUrl": "https://www.allwaterseattle.com/",
        "isDifferentGeo": false,
        "parentGeoName": "Seattle",
        "distanceTo": null,
        "awardInfo": null,
        "isLocalChefItem": false,
        "isPremium": false,
        "isStoryboardPublished": false,
        "establishmentTypeAndCuisineTags": [
          "American",
          "Seafood"
        ],
        "offers": {
          "hasDelivery": null,
          "hasReservation": null,
          "slot1Offer": null,
          "slot2Offer": null,
          "restaurantSpecialOffer": null
        },
        "heroImgUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/24/33/d9/dining-area-and-bar.jpg?w=2000&h=1300&s=1",
        "heroImgRawHeight": 1333,
        "heroImgRawWidth": 2000,
        "squareImgUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/24/33/d9/dining-area-and-bar.jpg?w=200&h=200&s=1",
        "squareImgRawLength": 0,
        "thumbnail": {
          "photo": {
            "photoSizeDynamic": {
              "urlTemplate": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/24/33/d9/dining-area-and-bar.jpg?w={width}&h={height}&s=1",
              "maxHeight": 1333,
              "maxWidth": 2000
            },
            "photoSizes": [
              {
                "width": 0,
                "height": 0,
                "url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/24/33/d9/dining-area-and-bar.jpg?w=100&h=100&s=1"
              },
              {
                "width": 50,
                "height": 50,
                "url": "https://media-cdn.tripadvisor.com/media/photo-t/12/24/33/d9/dining-area-and-bar.jpg"
              },
              {
                "width": 150,
                "height": 150,
                "url": "https://media-cdn.tripadvisor.com/media/photo-l/12/24/33/d9/dining-area-and-bar.jpg"
              },
              {
                "width": 180,
                "height": 200,
                "url": "https://media-cdn.tripadvisor.com/media/photo-i/12/24/33/d9/dining-area-and-bar.jpg"
              },
              {
                "width": 250,
                "height": 167,
                "url": "https://media-cdn.tripadvisor.com/media/photo-f/12/24/33/d9/dining-area-and-bar.jpg"
              },
              {
                "width": 550,
                "height": 367,
                "url": "https://media-cdn.tripadvisor.com/media/photo-s/12/24/33/d9/dining-area-and-bar.jpg"
              },
              {
                "width": 1024,
                "height": 682,
                "url": "https://media-cdn.tripadvisor.com/media/photo-w/12/24/33/d9/dining-area-and-bar.jpg"
              },
              {
                "width": 2000,
                "height": 1333,
                "url": "https://media-cdn.tripadvisor.com/media/photo-o/12/24/33/d9/dining-area-and-bar.jpg"
              }
            ]
          }
        },
        "reviewSnippets": {
          "reviewSnippetsList": [
            {
              "reviewText": "￹Fish and chips￻ was very tasty.",
              "reviewUrl": "https://www.tripadvisor.com/ShowUserReviews-g60878-d13010720-r899872559-All_Water_Seafood_Oyster_Bar-Seattle_Washington.html"
            },
            {
              "reviewText": "Coming from Denver my seafood background...",
              "reviewUrl": "https://www.tripadvisor.com/ShowUserReviews-g60878-d13010720-r643659825-All_Water_Seafood_Oyster_Bar-Seattle_Washington.html"
            }
          ]
        }
      },
      {
        "restaurantsId": "Restaurant_Review-g60878-d3226980-Reviews-Chan_Seattle-Seattle_Washington",
        "locationId": 3226980,
        "name": "Chan Seattle",
        "averageRating": 4.5,
        "userReviewCount": 313,
        "currentOpenStatusCategory": "OPEN",
        "currentOpenStatusText": "Open Now",
        "priceTag": "$$ - $$$",
        "hasMenu": true,
        "menuUrl": "http://chanseattle.com/menu",
        "isDifferentGeo": false,
        "parentGeoName": "Seattle",
        "distanceTo": null,
        "awardInfo": null,
        "isLocalChefItem": false,
        "isPremium": false,
        "isStoryboardPublished": false,
        "establishmentTypeAndCuisineTags": [
          "Bar",
          "Asian",
          "Korean"
        ],
        "offers": {
          "hasDelivery": null,
          "hasReservation": null,
          "slot1Offer": null,
          "slot2Offer": null,
          "restaurantSpecialOffer": null
        },
        "heroImgUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/15/39/d9/chan-wings.jpg?w=4000&h=3000&s=1",
        "heroImgRawHeight": 3024,
        "heroImgRawWidth": 4032,
        "squareImgUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/15/39/d9/chan-wings.jpg?w=200&h=200&s=1",
        "squareImgRawLength": 0,
        "thumbnail": {
          "photo": {
            "photoSizeDynamic": {
              "urlTemplate": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/15/39/d9/chan-wings.jpg?w={width}&h={height}&s=1",
              "maxHeight": 3024,
              "maxWidth": 4032
            },
            "photoSizes": [
              {
                "width": 0,
                "height": 0,
                "url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/15/39/d9/chan-wings.jpg?w=100&h=100&s=1"
              },
              {
                "width": 50,
                "height": 50,
                "url": "https://media-cdn.tripadvisor.com/media/photo-t/19/15/39/d9/chan-wings.jpg"
              },
              {
                "width": 150,
                "height": 150,
                "url": "https://media-cdn.tripadvisor.com/media/photo-l/19/15/39/d9/chan-wings.jpg"
              },
              {
                "width": 180,
                "height": 200,
                "url": "https://media-cdn.tripadvisor.com/media/photo-i/19/15/39/d9/chan-wings.jpg"
              },
              {
                "width": 250,
                "height": 188,
                "url": "https://media-cdn.tripadvisor.com/media/photo-f/19/15/39/d9/chan-wings.jpg"
              },
              {
                "width": 550,
                "height": 412,
                "url": "https://media-cdn.tripadvisor.com/media/photo-s/19/15/39/d9/chan-wings.jpg"
              },
              {
                "width": 1024,
                "height": 768,
                "url": "https://media-cdn.tripadvisor.com/media/photo-w/19/15/39/d9/chan-wings.jpg"
              },
              {
                "width": 1280,
                "height": 960,
                "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/19/15/39/d9/chan-wings.jpg"
              }
            ]
          }
        },
        "reviewSnippets": {
          "reviewSnippetsList": [
            {
              "reviewText": "Best ￹tuna￻ tartare ever.",
              "reviewUrl": "https://www.tripadvisor.com/ShowUserReviews-g60878-d3226980-r876776266-Chan_Seattle-Seattle_Washington.html"
            },
            {
              "reviewText": "Reasonable prices, especially if you can...",
              "reviewUrl": "https://www.tripadvisor.com/ShowUserReviews-g60878-d3226980-r695927179-Chan_Seattle-Seattle_Washington.html"
            }
          ]
        }
      },
      {
        "restaurantsId": "Restaurant_Review-g60878-d1516303-Reviews-Tilikum_Place_Cafe-Seattle_Washington",
        "locationId": 1516303,
        "name": "Tilikum Place Cafe",
        "averageRating": 4.5,
        "userReviewCount": 762,
        "currentOpenStatusCategory": "OPEN",
        "currentOpenStatusText": "Open Now",
        "priceTag": "$$ - $$$",
        "hasMenu": false,
        "menuUrl": null,
        "isDifferentGeo": false,
        "parentGeoName": "Seattle",
        "distanceTo": null,
        "awardInfo": null,
        "isLocalChefItem": false,
        "isPremium": false,
        "isStoryboardPublished": false,
        "establishmentTypeAndCuisineTags": [
          "American",
          "European"
        ],
        "offers": {
          "hasDelivery": false,
          "hasReservation": true,
          "slot2Offer": null,
          "restaurantSpecialOffer": null,
          "slot1Offer": {
            "providerId": "15910",
            "provider": "OpenTable",
            "providerDisplayName": "OpenTable",
            "buttonText": "Reserve",
            "offerURL": "ZTUzXy9Db21tZXJjZT9wPU9wZW5UYWJsZSZzcmM9MjMyMTY5OTQ1Jmdlbz0xNTE2MzAzJmZyb209UmVzdGF1cmFudHMmYXJlYT1yZXNlcnZhdGlvbl9idXR0b24mc2xvdD0xJm1hdGNoSUQ9MSZvb3M9MCZjbnQ9MSZzaWxvPTQ1NTgyJmJ1Y2tldD05Nzk2NDEmbnJhbms9MSZjcmFuaz0xJmNsdD1SJnR0eXBlPVJlc3RhdXJhbnQmdG09Mjc1MzUwNDM5Jm1hbmFnZWQ9ZmFsc2UmY2FwcGVkPWZhbHNlJmdvc294PTlETXZpYkRUV2ROYUZlR1lMOFFUYWt5djFMQllaYUdwZUI0TUVIbi1odjJtWkJOMzc2RUhWQ0d1c1RJUnhtSjg1ME1YZTFtSnRLbnpoaUdQQzVPVWpCTWRZZzVhRndPbm9WV1cyd0tocGZNJmNzPTE2MzcwZGY2ZjlmNDMxZjJhZTQzYjhjNjAxZDRiMjI2YV9ieWE=",
            "logoUrl": "/img2/branding/hotels/OT_Logo_1000x232.png",
            "trackingEvent": "reserve_click",
            "canProvideTimeslots": true,
            "canLockTimeslots": true,
            "timeSlots": []
          }
        },
        "heroImgUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/50/25/1c/petite-tenderloin-pea.jpg?w=1200&h=1100&s=1",
        "heroImgRawHeight": 1178,
        "heroImgRawWidth": 1237,
        "squareImgUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/50/25/1c/petite-tenderloin-pea.jpg?w=200&h=200&s=1",
        "squareImgRawLength": 0,
        "thumbnail": {
          "photo": {
            "photoSizeDynamic": {
              "urlTemplate": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/50/25/1c/petite-tenderloin-pea.jpg?w={width}&h={height}&s=1",
              "maxHeight": 1178,
              "maxWidth": 1237
            },
            "photoSizes": [
              {
                "width": 0,
                "height": 0,
                "url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/50/25/1c/petite-tenderloin-pea.jpg?w=100&h=100&s=1"
              },
              {
                "width": 50,
                "height": 50,
                "url": "https://media-cdn.tripadvisor.com/media/photo-t/0f/50/25/1c/petite-tenderloin-pea.jpg"
              },
              {
                "width": 150,
                "height": 150,
                "url": "https://media-cdn.tripadvisor.com/media/photo-l/0f/50/25/1c/petite-tenderloin-pea.jpg"
              },
              {
                "width": 180,
                "height": 200,
                "url": "https://media-cdn.tripadvisor.com/media/photo-i/0f/50/25/1c/petite-tenderloin-pea.jpg"
              },
              {
                "width": 215,
                "height": 205,
                "url": "https://media-cdn.tripadvisor.com/media/photo-f/0f/50/25/1c/petite-tenderloin-pea.jpg"
              },
              {
                "width": 473,
                "height": 450,
                "url": "https://media-cdn.tripadvisor.com/media/photo-s/0f/50/25/1c/petite-tenderloin-pea.jpg"
              },
              {
                "width": 1024,
                "height": 975,
                "url": "https://media-cdn.tripadvisor.com/media/photo-w/0f/50/25/1c/petite-tenderloin-pea.jpg"
              },
              {
                "width": 1237,
                "height": 1178,
                "url": "https://media-cdn.tripadvisor.com/media/photo-o/0f/50/25/1c/petite-tenderloin-pea.jpg"
              }
            ]
          }
        },
        "reviewSnippets": {
          "reviewSnippetsList": [
            {
              "reviewText": "The service was amazing…our waitress (I think Elaine was her name) steered us...",
              "reviewUrl": "https://www.tripadvisor.com/ShowUserReviews-g60878-d1516303-r798790911-Tilikum_Place_Cafe-Seattle_Washington.html"
            },
            {
              "reviewText": "... and two of us the lamb ragu ￹pasta￻.",
              "reviewUrl": "https://www.tripadvisor.com/ShowUserReviews-g60878-d1516303-r827913882-Tilikum_Place_Cafe-Seattle_Washington.html"
            }
          ]
        }
      },
      {
        "restaurantsId": "Restaurant_Review-g60878-d1074759-Reviews-The_Capital_Grille-Seattle_Washington",
        "locationId": 1074759,
        "name": "The Capital Grille",
        "averageRating": 4.5,
        "userReviewCount": 641,
        "currentOpenStatusCategory": "OPEN",
        "currentOpenStatusText": "Open Now",
        "priceTag": "$$$$",
        "hasMenu": false,
        "menuUrl": null,
        "isDifferentGeo": false,
        "parentGeoName": "Seattle",
        "distanceTo": null,
        "awardInfo": {
          "year": 2022,
          "awardType": "COE"
        },
        "isLocalChefItem": false,
        "isPremium": false,
        "isStoryboardPublished": false,
        "establishmentTypeAndCuisineTags": [
          "American",
          "Steakhouse"
        ],
        "offers": {
          "hasDelivery": false,
          "hasReservation": true,
          "slot2Offer": null,
          "restaurantSpecialOffer": null,
          "slot1Offer": {
            "providerId": "15910",
            "provider": "OpenTable",
            "providerDisplayName": "OpenTable",
            "buttonText": "Reserve",
            "offerURL": "YnFqXy9Db21tZXJjZT9wPU9wZW5UYWJsZSZzcmM9MjMyMTgyMjUxJmdlbz0xMDc0NzU5JmZyb209UmVzdGF1cmFudHMmYXJlYT1yZXNlcnZhdGlvbl9idXR0b24mc2xvdD0xJm1hdGNoSUQ9MSZvb3M9MCZjbnQ9MSZzaWxvPTQ1NTgyJmJ1Y2tldD05Nzk2NDEmbnJhbms9MSZjcmFuaz0xJmNsdD1SJnR0eXBlPVJlc3RhdXJhbnQmdG09Mjc1MzUwNDM5Jm1hbmFnZWQ9ZmFsc2UmY2FwcGVkPWZhbHNlJmdvc294PTlETXZpYkRUV2ROYUZlR1lMOFFUYWt5djFMQllaYUdwZUI0TUVIbi1odjJtWkJOMzc2RUhWQ0d1c1RJUnhtSjh3SUhJenNZQ3ZpYTBCbXZoUkRScnJvUzNxQm9YZ1B3WmdvVHMtQVNLM280JmNzPTE3ODJlYjJjMzRmN2MxMzUyNmFhOWE5OGJhNTM0NTg4Y180aWs=",
            "logoUrl": "/img2/branding/hotels/OT_Logo_1000x232.png",
            "trackingEvent": "reserve_click",
            "canProvideTimeslots": true,
            "canLockTimeslots": true,
            "timeSlots": []
          }
        },
        "heroImgUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/7a/dd/7a/photo0jpg.jpg?w=2000&h=1500&s=1",
        "heroImgRawHeight": 1536,
        "heroImgRawWidth": 2048,
        "squareImgUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/7a/dd/7a/photo0jpg.jpg?w=200&h=200&s=1",
        "squareImgRawLength": 0,
        "thumbnail": {
          "photo": {
            "photoSizeDynamic": {
              "urlTemplate": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/7a/dd/7a/photo0jpg.jpg?w={width}&h={height}&s=1",
              "maxHeight": 1536,
              "maxWidth": 2048
            },
            "photoSizes": [
              {
                "width": 0,
                "height": 0,
                "url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/7a/dd/7a/photo0jpg.jpg?w=100&h=100&s=1"
              },
              {
                "width": 50,
                "height": 50,
                "url": "https://media-cdn.tripadvisor.com/media/photo-t/18/7a/dd/7a/photo0jpg.jpg"
              },
              {
                "width": 150,
                "height": 150,
                "url": "https://media-cdn.tripadvisor.com/media/photo-l/18/7a/dd/7a/photo0jpg.jpg"
              },
              {
                "width": 180,
                "height": 200,
                "url": "https://media-cdn.tripadvisor.com/media/photo-i/18/7a/dd/7a/photo0jpg.jpg"
              },
              {
                "width": 250,
                "height": 188,
                "url": "https://media-cdn.tripadvisor.com/media/photo-f/18/7a/dd/7a/photo0jpg.jpg"
              },
              {
                "width": 550,
                "height": 413,
                "url": "https://media-cdn.tripadvisor.com/media/photo-s/18/7a/dd/7a/photo0jpg.jpg"
              },
              {
                "width": 1024,
                "height": 768,
                "url": "https://media-cdn.tripadvisor.com/media/photo-w/18/7a/dd/7a/photo0jpg.jpg"
              },
              {
                "width": 1280,
                "height": 960,
                "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/18/7a/dd/7a/photo0jpg.jpg"
              }
            ]
          }
        },
        "reviewSnippets": {
          "reviewSnippetsList": [
            {
              "reviewText": "Visiting a capital grille is a must on any trip. The service and food are...",
              "reviewUrl": "https://www.tripadvisor.com/ShowUserReviews-g60878-d1074759-r741990396-The_Capital_Grille-Seattle_Washington.html"
            },
            {
              "reviewText": "Great service great ￹steak￻!",
              "reviewUrl": "https://www.tripadvisor.com/ShowUserReviews-g60878-d1074759-r902330721-The_Capital_Grille-Seattle_Washington.html"
            }
          ]
        }
      },
      
      {
        "restaurantsId": "Restaurant_Review-g60878-d6900468-Reviews-Fremont_Brewing-Seattle_Washington",
        "locationId": 6900468,
        "name": "Fremont Brewing",
        "averageRating": 4.5,
        "userReviewCount": 198,
        "currentOpenStatusCategory": "OPEN",
        "currentOpenStatusText": "Open Now",
        "priceTag": "$",
        "hasMenu": false,
        "menuUrl": null,
        "isDifferentGeo": false,
        "parentGeoName": "Seattle",
        "distanceTo": null,
        "awardInfo": null,
        "isLocalChefItem": false,
        "isPremium": false,
        "isStoryboardPublished": false,
        "establishmentTypeAndCuisineTags": [
          "Brew Pub",
          "Pub"
        ],
        "offers": {
          "hasDelivery": null,
          "hasReservation": null,
          "slot1Offer": null,
          "slot2Offer": null,
          "restaurantSpecialOffer": null
        },
        "heroImgUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/7b/56/e2/fremont-brewing.jpg?w=1200&h=900&s=1",
        "heroImgRawHeight": 960,
        "heroImgRawWidth": 1280,
        "squareImgUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/7b/56/e2/fremont-brewing.jpg?w=200&h=200&s=1",
        "squareImgRawLength": 0,
        "thumbnail": {
          "photo": {
            "photoSizeDynamic": {
              "urlTemplate": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/7b/56/e2/fremont-brewing.jpg?w={width}&h={height}&s=1",
              "maxHeight": 960,
              "maxWidth": 1280
            },
            "photoSizes": [
              {
                "width": 0,
                "height": 0,
                "url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/7b/56/e2/fremont-brewing.jpg?w=100&h=100&s=1"
              },
              {
                "width": 50,
                "height": 50,
                "url": "https://media-cdn.tripadvisor.com/media/photo-t/1a/7b/56/e2/fremont-brewing.jpg"
              },
              {
                "width": 150,
                "height": 150,
                "url": "https://media-cdn.tripadvisor.com/media/photo-l/1a/7b/56/e2/fremont-brewing.jpg"
              },
              {
                "width": 180,
                "height": 200,
                "url": "https://media-cdn.tripadvisor.com/media/photo-i/1a/7b/56/e2/fremont-brewing.jpg"
              },
              {
                "width": 250,
                "height": 188,
                "url": "https://media-cdn.tripadvisor.com/media/photo-f/1a/7b/56/e2/fremont-brewing.jpg"
              },
              {
                "width": 550,
                "height": 413,
                "url": "https://media-cdn.tripadvisor.com/media/photo-s/1a/7b/56/e2/fremont-brewing.jpg"
              },
              {
                "width": 1024,
                "height": 768,
                "url": "https://media-cdn.tripadvisor.com/media/photo-w/1a/7b/56/e2/fremont-brewing.jpg"
              },
              {
                "width": 1280,
                "height": 960,
                "url": "https://media-cdn.tripadvisor.com/media/photo-o/1a/7b/56/e2/fremont-brewing.jpg"
              }
            ]
          }
        },
        "reviewSnippets": {
          "reviewSnippetsList": [
            {
              "reviewText": "Outstanding ￹beers￻",
              "reviewUrl": "https://www.tripadvisor.com/ShowUserReviews-g60878-d6900468-r875196342-Fremont_Brewing-Seattle_Washington.html"
            },
            {
              "reviewText": "The beer was super yummy also. I like the...",
              "reviewUrl": "https://www.tripadvisor.com/ShowUserReviews-g60878-d6900468-r703275657-Fremont_Brewing-Seattle_Washington.html"
            }
          ]
        }
      },
      {
        "restaurantsId": "Restaurant_Review-g58541-d433224-Reviews-Cafe_Juanita-Kirkland_Washington",
        "locationId": 433224,
        "name": "Cafe Juanita",
        "averageRating": 4.5,
        "userReviewCount": 342,
        "currentOpenStatusCategory": "OPEN",
        "currentOpenStatusText": "Open Now",
        "priceTag": "$$$$",
        "hasMenu": true,
        "menuUrl": "http://www.cafejuanita.com/menu",
        "isDifferentGeo": false,
        "parentGeoName": "Kirkland",
        "distanceTo": null,
        "awardInfo": null,
        "isLocalChefItem": false,
        "isPremium": false,
        "isStoryboardPublished": false,
        "establishmentTypeAndCuisineTags": [
          "Italian",
          "Contemporary"
        ],
        "offers": {
          "hasDelivery": null,
          "hasReservation": null,
          "slot1Offer": null,
          "slot2Offer": null,
          "restaurantSpecialOffer": null
        },
        "heroImgUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/30/5e/3e/yellowfin-avo.jpg?w=1500&h=1500&s=1",
        "heroImgRawHeight": 1512,
        "heroImgRawWidth": 1512,
        "squareImgUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/30/5e/3e/yellowfin-avo.jpg?w=200&h=200&s=1",
        "squareImgRawLength": 0,
        "thumbnail": {
          "photo": {
            "photoSizeDynamic": {
              "urlTemplate": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/30/5e/3e/yellowfin-avo.jpg?w={width}&h={height}&s=1",
              "maxHeight": 1512,
              "maxWidth": 1512
            },
            "photoSizes": [
              {
                "width": 0,
                "height": 0,
                "url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/30/5e/3e/yellowfin-avo.jpg?w=100&h=100&s=1"
              },
              {
                "width": 50,
                "height": 50,
                "url": "https://media-cdn.tripadvisor.com/media/photo-t/14/30/5e/3e/yellowfin-avo.jpg"
              },
              {
                "width": 150,
                "height": 150,
                "url": "https://media-cdn.tripadvisor.com/media/photo-l/14/30/5e/3e/yellowfin-avo.jpg"
              },
              {
                "width": 180,
                "height": 200,
                "url": "https://media-cdn.tripadvisor.com/media/photo-i/14/30/5e/3e/yellowfin-avo.jpg"
              },
              {
                "width": 205,
                "height": 205,
                "url": "https://media-cdn.tripadvisor.com/media/photo-f/14/30/5e/3e/yellowfin-avo.jpg"
              },
              {
                "width": 450,
                "height": 450,
                "url": "https://media-cdn.tripadvisor.com/media/photo-s/14/30/5e/3e/yellowfin-avo.jpg"
              },
              {
                "width": 550,
                "height": 550,
                "url": "https://media-cdn.tripadvisor.com/media/photo-p/14/30/5e/3e/yellowfin-avo.jpg"
              },
              {
                "width": 1024,
                "height": 1024,
                "url": "https://media-cdn.tripadvisor.com/media/photo-w/14/30/5e/3e/yellowfin-avo.jpg"
              },
              {
                "width": 1280,
                "height": 1280,
                "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/14/30/5e/3e/yellowfin-avo.jpg"
              }
            ]
          }
        },
        "reviewSnippets": {
          "reviewSnippetsList": [
            {
              "reviewText": "... food, and an excellent waiter (it was also a prix-fixe ￹tasting menu￻).",
              "reviewUrl": "https://www.tripadvisor.com/ShowUserReviews-g58541-d433224-r887585609-Cafe_Juanita-Kirkland_Washington.html"
            },
            {
              "reviewText": "... dessert, ￹panna￻ cotta with summer be...",
              "reviewUrl": "https://www.tripadvisor.com/ShowUserReviews-g58541-d433224-r856144973-Cafe_Juanita-Kirkland_Washington.html"
            }
          ]
        }
      },
      
      {
        "restaurantsId": "Restaurant_Review-g60878-d676730-Reviews-Serious_Pie_Downtown-Seattle_Washington",
        "locationId": 676730,
        "name": "Serious Pie Downtown",
        "averageRating": 4.5,
        "userReviewCount": 1843,
        "currentOpenStatusCategory": "OPEN",
        "currentOpenStatusText": "Open Now",
        "priceTag": "$$ - $$$",
        "hasMenu": true,
        "menuUrl": "https://www.seriouspieseattle.com/serious-pie-downtown/",
        "isDifferentGeo": false,
        "parentGeoName": "Seattle",
        "distanceTo": null,
        "awardInfo": {
          "year": 2022,
          "awardType": "COE"
        },
        "isLocalChefItem": false,
        "isPremium": false,
        "isStoryboardPublished": false,
        "establishmentTypeAndCuisineTags": [
          "Italian",
          "Pizza"
        ],
        "offers": {
          "hasDelivery": null,
          "hasReservation": null,
          "slot1Offer": null,
          "slot2Offer": null,
          "restaurantSpecialOffer": null
        },
        "heroImgUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/7d/6a/d3/overview-of-restaurant.jpg?w=2000&h=1200&s=1",
        "heroImgRawHeight": 1256,
        "heroImgRawWidth": 2000,
        "squareImgUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/7d/6a/d3/overview-of-restaurant.jpg?w=200&h=200&s=1",
        "squareImgRawLength": 0,
        "thumbnail": {
          "photo": {
            "photoSizeDynamic": {
              "urlTemplate": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/7d/6a/d3/overview-of-restaurant.jpg?w={width}&h={height}&s=1",
              "maxHeight": 1256,
              "maxWidth": 2000
            },
            "photoSizes": [
              {
                "width": 0,
                "height": 0,
                "url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/7d/6a/d3/overview-of-restaurant.jpg?w=100&h=100&s=1"
              },
              {
                "width": 50,
                "height": 50,
                "url": "https://media-cdn.tripadvisor.com/media/photo-t/0e/7d/6a/d3/overview-of-restaurant.jpg"
              },
              {
                "width": 150,
                "height": 150,
                "url": "https://media-cdn.tripadvisor.com/media/photo-l/0e/7d/6a/d3/overview-of-restaurant.jpg"
              },
              {
                "width": 180,
                "height": 200,
                "url": "https://media-cdn.tripadvisor.com/media/photo-i/0e/7d/6a/d3/overview-of-restaurant.jpg"
              },
              {
                "width": 250,
                "height": 157,
                "url": "https://media-cdn.tripadvisor.com/media/photo-f/0e/7d/6a/d3/overview-of-restaurant.jpg"
              },
              {
                "width": 550,
                "height": 345,
                "url": "https://media-cdn.tripadvisor.com/media/photo-s/0e/7d/6a/d3/overview-of-restaurant.jpg"
              },
              {
                "width": 1024,
                "height": 643,
                "url": "https://media-cdn.tripadvisor.com/media/photo-w/0e/7d/6a/d3/overview-of-restaurant.jpg"
              },
              {
                "width": 2000,
                "height": 1256,
                "url": "https://media-cdn.tripadvisor.com/media/photo-o/0e/7d/6a/d3/overview-of-restaurant.jpg"
              }
            ]
          }
        },
        "reviewSnippets": {
          "reviewSnippetsList": [
            {
              "reviewText": "Good ￹thin-crust pizza￻ in comfortable atmosphere",
              "reviewUrl": "https://www.tripadvisor.com/ShowUserReviews-g60878-d676730-r826964035-Serious_Pie_Downtown-Seattle_Washington.html"
            },
            {
              "reviewText": "... Barrata, and the ￹salad￻ with pine nuts.",
              "reviewUrl": "https://www.tripadvisor.com/ShowUserReviews-g60878-d676730-r902052316-Serious_Pie_Downtown-Seattle_Washington.html"
            }
          ]
        }
      }
    ],
    "currentPage": 1
  }
}