// <-------------map------------>

// const nums = [1, 5, 6, 7, 8, 2, 4]

// const sqrt = nums.map( (n) => { return n ** 2 });
// console.log(sqrt);                                      // Square

// const prices = ['$25', '$60', '$80', '$70', '$21']

// console.log(parseInt('$25'.slice(1)));

// const numprices =prices.map((p)=>{
//     return parseInt(p.slice(1))
// })

// // find 10% discount on each price

// const dis = numprices.map( (d)=>{
//         return ((10*d)/100);
// })
// console.log(dis);

// const names = [Raju , Kallu ,Chinkara ,churan]
// const first ='Shashank Verma'
// const fir = first.map( (f)=>{

// })



// <-----------------filter------------------>

const nums = [3, 5, 8, 12, 14, 9]

const oddnum = nums.filter((n) => {
    return n % 2 !== 0;
});
console.log(oddnum);


const pr = [740, 920, 1450, 3500, 6400, 7200, 120]

//less than 5000 and greater than 1000

const f = pr.filter((po) => {
    return (po > 1000 && po < 5000)
})
console.log(f);

const phonelist = [
    {
        brand: 'Iqoo',
        model: 'neo 7 pro',
        price: 32999,
        color: ["mat-red-orange", 'green', 'yellow']
    },
    {
        brand: 'Realme',
        model: '7 pro',
        price: 20999,
        color: ["red-orange", "yellow", 'black']
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
    },
    {
        brand: 'OnePlus',
        model: '9 Pro',
        price: 19999,
        color: ["mat-red"]
    }
];

const pric=phonelist.filter((pr)=>{
    return (pr.price > 30000)
})
console.log(pric);

const price = phonelist.filter((p)=>{
    return (p.brand==='OnePlus')
})
console.log(price);

//printing phone of color yellow 
// color is array so we use includes so that it can check same word in array
const col = phonelist.filter((c)=>{
    return (c.color.includes('yellow'))
})
console.log(col);