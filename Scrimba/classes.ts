// // Wrapping up our Dashboard
// // 1. Create All the other interfaces you think are needed for this board
// // 2. Using the Class, visually show the main Image above the review button.
// // import { showReviewTotal, populateUser, showDetails, getTopTwoReviews} from './utils'
// // import { Price, Country } from './types'
// // import { Permissions , LoyaltyUser } from './enums'
// // import  Review  from './interfaces'
// const propertyContainer = document.querySelector(".properties");
// const reviewContainer = document.querySelector(".reviews");
// const container = document.querySelector(".container");
// const button = document.querySelector("button");
// const footer = document.querySelector(".footer");

// let isLoggedIn: boolean;

// // // enum Permissions {
// //     ADMIN = 'ADMIN',
// //     READ_ONLY = 'READ_ONLY'
// // }

// enum LoyaltyUser {
//   GOLD_USER = "GOLD_USER",
//   SILVER_USER = "SILVER_USER",
//   BRONZE_USER = "BRONZE_USER",
// }

// interface Review {
//   name: string;
//   stars: number;
//   loyaltyUser: LoyaltyUser;
//   date: string;
// }

// // Reviews
// const reviews: Review[] = [
//   {
//     name: "Sheila",
//     stars: 5,
//     loyaltyUser: LoyaltyUser.GOLD_USER,
//     date: "01-04-2021",
//   },
//   {
//     name: "Andrzej",
//     stars: 3,
//     loyaltyUser: LoyaltyUser.BRONZE_USER,
//     date: "28-03-2021",
//   },
//   {
//     name: "Omar",
//     stars: 4,
//     loyaltyUser: LoyaltyUser.SILVER_USER,
//     date: "27-03-2021",
//   },
// ];

// const you = {
//   firstName: "Bobby",
//   lastName: "Brown",
//   permissions: Permissions.ADMIN,
//   isReturning: true,
//   age: 35,
//   stayedAt: ["florida-home", "oman-flat", "tokyo-bungalow"],
// };

// interface Property {
//   image: string;
//   title: string;
//   price: Price;
//   location: {
//     firstLine: string;
//     city: string;
//     code: number | string;
//     country: Country;
//   };
//   contact: [number, string];
//   isAvailable: boolean;
// }

// // Array of Properties
// const properties: Property[] = [
//   {
//     image: "images/colombia-property.jpg",
//     title: "Colombian Shack",
//     price: 45,
//     location: {
//       firstLine: "shack 37",
//       city: "Bogota",
//       code: 45632,
//       country: "Colombia",
//     },
//     contact: [+112343823978921, "marywinkle@gmail.com"],
//     isAvailable: true,
//   },
//   {
//     image: "images/poland-property.jpg",
//     title: "Polish Cottage",
//     price: 30,
//     location: {
//       firstLine: "no 23",
//       city: "Gdansk",
//       code: 343903,
//       country: "Poland",
//     },
//     contact: [+1298239028490830, "garydavis@hotmail.com"],
//     isAvailable: false,
//   },
//   {
//     image: "images/london-property.jpg",
//     title: "London Flat",
//     price: 25,
//     location: {
//       firstLine: "flat 15",
//       city: "London",
//       code: "SW4 5XW",
//       country: "United Kingdom",
//     },
//     contact: [+34829374892553, "andyluger@aol.com"],
//     isAvailable: true,
//   },
// ];

// // Functions
// showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);

// populateUser(you.isReturning, you.firstName);

// // Add the properties
// for (let i = 0; i < properties.length; i++) {
//   const card = document.createElement("div");
//   card.classList.add("card");
//   card.innerHTML = properties[i].title;
//   const image = document.createElement("img");
//   image.setAttribute("src", properties[i].image);
//   card.appendChild(image);
//   showDetails(you.permissions, card, properties[i].price);
//   propertyContainer.appendChild(card);
// }

// let count = 0;
// function addReviews(array: Review[]): void {
//   if (!count) {
//     count++;
//     const topTwo = getTopTwoReviews(array);
//     for (let i = 0; i < topTwo.length; i++) {
//       const card = document.createElement("div");
//       card.classList.add("review-card");
//       card.innerHTML = topTwo[i].stars + " stars from " + topTwo[i].name;
//       reviewContainer.appendChild(card);
//     }
//     container.removeChild(button);
//   }
// }

// button.addEventListener("click", () => addReviews(reviews));

// let currentLocation: [string, string, number] = ["London", "11.03", 17];
// footer.innerHTML =
//   currentLocation[0] +
//   " " +
//   currentLocation[1] +
//   " " +
//   currentLocation[2] +
//   "°";

// // Classes
// class MainProperty {
//   src: string;
//   title: string;
//   reviews: Review[];
//   constructor(src: string, title: string, reviews: Review[]) {
//     this.src = src;
//     this.title = title;
//     this.reviews = reviews;
//   }
// }

// let yourMainProperty = new MainProperty(
//   "images/italian-property.jpg",
//   "Italian House",
//   [
//     {
//       name: "Olive",
//       stars: 5,
//       loyaltyUser: LoyaltyUser.GOLD_USER,
//       date: "12-04-2021",
//     },
//   ]
// );

// const mainImageContainer = document.querySelector(".main-image");
// const image = document.createElement("img");
// image.setAttribute("src", yourMainProperty.src);
// mainImageContainer.appendChild(image);
