// Define an interface User with properties username: string, email: string, and isAdmin: boolean.
// Then, create a function printUserInfo(user: User) that prints user details.
function printUserInfo(user) {
    console.log("Username : ".concat(user.userName));
    console.log("Email: ".concat(user.email));
    console.log("Admin: ".concat(user.isAdmin));
    
}
printUserInfo({
    userName: "Umwizerwa",
    email: "ruthumwizerwa@gmail.com",
    isAdmin: true,
});
