"use strict";
// Define an interface User with properties username: string, email: string, and isAdmin: boolean.
// Then, create a function printUserInfo(user: User) that prints user details.
function printUserInfo1(user) {
    console.log(`Username : ${user.userName}`);
    console.log(`Email: ${user.email}`);
    console.log(`Admin: ${user.isAdmin}`);
}
printUserInfo({
    userName: "Umwizerwa",
    email: "ruthumwizerwa@gmail.com",
    isAdmin: true,
});
