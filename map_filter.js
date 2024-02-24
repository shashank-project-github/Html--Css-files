const nums = [1, 5, 6, 7, 8, 2, 4]

const sqrt = nums.map( (n) => { return n ** 2 });
console.log(sqrt);                                      // Square

const prices = ['$25', '$60', '$80', '$70', '$21']

console.log(parseInt('$25'.slice(1)));

const numprices =prices.map((p)=>{
    return parseInt(p.slice(1))
})

// find 10% discount on each price

const dis = numprices.map( (d)=>{
        return ((10*d)/100);
})
console.log(dis);

// const names = [Raju , Kallu ,Chinkara ,churan]
const first ='Shashank Verma'
const fir = first.map( (f)=>{
    
})
