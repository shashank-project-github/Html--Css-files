// // for loop

// let sum=0;
// const num = [34,89,284,275,39,53,92];

// for (let i = 0; i < num.length; i++) {
//     // console.log(num[i]);
//     sum=sum+num[i];
// }
// console.log(sum);

// //for each function

// let sum2=0;
// num.forEach((n) => {
//     sum2=sum2+n;
// });
// console.log(sum2);


// num.forEach((a) => {
    //     if (a!=0 && a%2==0  ) {
        //         console.log(a);
        //     }
        //     // console.log(a);
        
        // });
// QUESTION--2
// find sum of all elements at even index
const num = [34,89,284,275,39,53,92];
let sum=0;
for (let a = 0; a < num.length; a+=2) {
    sum=sum+num[a];
}
console.log(sum);