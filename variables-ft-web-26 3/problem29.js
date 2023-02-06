//let a=7
//let b=6

//ternary operator
//(a>b) ? console.log("a is greater") : console.log("b is greater")



// && operator 
//console.log((4>3) && ("ice"==="8") && (7>5));//used in filtering in shopping sites 



//or operator (||)

//console.log((4>3)|| ("ice"==="ice") || (7>15));

//if (("ice"==="ice") || (4<3)) {
  //console.log("This is a true condition even though four is not less three");
//}
//let supermarket="colgate";

//if ((supermarker="colgate") || (supermarket= "pepsodent") || (supermarket="clinique") || (supermarket= "patanjali")) {
//  console.log("can i please have", supermarket, "toothpaste");
//}
//else {
 // console.log("no toothpaste is found in the supermarket");
//}

//real life scenario for the or operator : multiple choice in the same filter option (like under brand: samsung and apple and one plus)

//let mobile1= "samsumg";
//let mobile2="apple";

//let memory= "4gb";
//let discount="40%";

//if (((mobile1=="samsumg")&& (memory=="4gb") && (discount=="40%")) || ((mobile2=="iphone") && (memory=="4gb") && (discount=="40%"))) {
//  console.log("we have", mobile1, mobile2, "phones");
//}

//not operator 
//console.log(!(1<3));


//switch case

let customer=2;

switch (customer){
  case 1: console.log("english");
    break;

  case 2: console.log("Hindi");
    break;

  case 3: console.log("telgu");
    break;

  default: console.log("wrong input");
} //i guess you could use this for telephone customer care and toothpaste option both, but you can't use the or operator for customer care haelpline example i think, so switchcase is specific to customer care example, BECAUSE EACH OPTION HAS A DIFFERENT OUTPUT 

let toothpaste= "colgate";

switch (toothpaste){
  case "colgate": console.log("can i have", toothpaste,"toothpaste");
    break;

  case "sensodyne": console.log("can i have", toothpaste, "toothpaste");
}