let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("First promise has resolved")
    }, 2*1000);
    resolve("p1 is resolve");

});


let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Second promise has resolved")
    }, 3*1000);
    resolve("p2 is resolve");

});

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Third promise has resolved")
    }, 4*1000);
    resolve("p3 is resolve");

});

Promise.all([p1,p2,p3]).then((result) =>{
    console.log(`Result: ${result}`);
}).catch((error) =>{
    console.log(`Error: ${error}`);
});