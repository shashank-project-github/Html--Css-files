
// a = 22;
// if (a % 2 === 0) {
//     console.log("even");
//     num= 88;
// } 
// else {
//     console.log("odd");
// }

// console.log(num);


const fruits=['apple','mango','pineapple','papaya','grapes'];

console.log(typeof fruits);
console.log(fruits.length);

console.log(fruits[2]);
console.log(fruits.slice(1,4));

const app=fruits[1];
console.log(app);
console.log(app.slice(1,3));

fruits.push('carry')
// console.log(fruits);
fruits.pop('mango')
// console.log(fruits);


fruits.shift();          //removes first element from array
// console.log(fruits);    

// adding and removing element from array  

fruits.splice(2,3)
console.log(fruits);

// fruits.splice(2,0,'orrange')
// console.log(fruits);