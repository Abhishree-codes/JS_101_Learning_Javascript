//user name and password stored in the database
let credentials_username= "Abhi";
let credentials_password= "Flower";

//the details you enter while logging in 

let username= "Abhi";
let password= "flower";

//when you try to login, the code compares the password and username you entered with the store password and username

if (credentials_username==username){
  if (credentials_password==password){
    console.log("you are logged in");
  }
  else {
    console.log("incorrect password");
  }
}
else {
  console.log("incorrect username");
}