// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var body = document.getElementById("gradient")
// /*
// console.log(css);

// window.addEventListener("DOMContentLoaded",setGradient);

// function setGradient(){
//     body.style.background =
//     "linear-gradient(to right," +color1.value+ ", " 
//     +color2.value+ ")";
    
//     css.textContent = body.style.background +":";
// }

// color1.addEventListener("input", setGradient);

// color2.addEventListener("input", setGradient);

// const array = [1,2,10,16];

// const double = []
// const newArray = array.forEach((num) => {
//     double.push(num*2);
// });

// console.log('foreach', double);

// //map, filter, reduce

// const mapArray = array.map((num)=>{
//     return num * 2;
// });

// console.log("map: ", mapArray);

// const filterArray = array.filter(num=>  num > 5);

// console.log("filter:", filterArray);

// const reduceArray = array.reduce((accumulator, num)=>{
//     return accumulator + num;
// }, 0);

// console.log('reduce', reduceArray);*/
// // Complete the below questions using this array:
// const array = [
//     {
//       username: "john",
//       team: "red",
//       score: 5,
//       items: ["ball", "book", "pen"]
//     },
//     {
//       username: "becky",
//       team: "blue",
//       score: 10,
//       items: ["tape", "backpack", "pen"]
//     },
//     {
//       username: "susy",
//       team: "red",
//       score: 55,
//       items: ["ball", "eraser", "pen"]
//     },
//     {
//       username: "tyson",
//       team: "green",
//       score: 1,
//       items: ["book", "pen"]
//     },
  
//   ];
//   console.log('test:', array[0].username);

//   //Create an array using forEach that has all the usernames with a "!" to each of the usernames
  
//   const array2=[];
//   const arrayForeach = array.forEach(i => {
//         array2.push(i.username + "!");
//   });
 
//   console.log(array2);
  
//   //Create an array using map that has all the usernames with a "? to each of the usernames
//   const mapArray = array.map(i =>{
//         return i.username+"?";
//   });
//   console.log('map:', mapArray);
  
//   //Filter the array to only include users who are on team: red
//   const filterArray = array.filter(i =>{
//     return i.team === "red";
//   } );
  
//   console.log('filter: ', filterArray);

//   //Find out the total score of all users using reduce
//   const sum = array.reduce((acc, i) =>{
//       return acc + i.score;
//   }, 0);
//   console.log(sum);

//   //(1), what is the value of i?
//   //(2), Make this map function pure:
//  const arrayNum = [1, 2, 4, 5, 8, 9];
//   const newArray = arrayNum.map((num, i) => {
//       return num * 2;
//   })
  

