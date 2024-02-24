
// const user  = {name:'Raju', age:25, email:"rajuji99@gmail.com", pass:"rajupass"};

// console.log(user);

// console.log(user.name);

// console.log(user['pass']);
// user.pass = 'raju-changed-pass'

// console.log(user['pass']);

// user.address= "raju-add";
// console.log(user.address);

// console.log(Object.keys(user));

// const smartphone = {
//     brand:'Iqoo',
//     model:'neo 7 pro',
//     price:32999,
//     color:"mat-red-orange"
// };

// console.log(smartphone);

// console.log(smartphone.color.length);

const phonelist = [
    {
        brand: 'Iqoo',
        model: 'neo 7 pro',
        price: 32999,
        color: ["mat-red-orange",'green','yellow']
    }, 
    {
        brand: 'Realme',
        model: '7 pro',
        price: 20999,
        color: ["red-orange","yellow",'black']
    }, 
    {
        brand: 'Redmi',
        model: '7',
        price: 15999,
        color: ["mat-orange"]
    },
    {
        brand: 'OnePlus',
        model: '10 Pro',
        price: 39999,
        color: ["mat-green"]
    }
];

console.log(phonelist.length);

console.log(phonelist[2].price);

console.log(phonelist[2].color.length);


console.log(phonelist[1].color[2]);

phonelist[3].color.push('gold');
console.log(phonelist[3].color);