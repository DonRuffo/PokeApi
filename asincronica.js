console.log('Programa iniciando... ')

setTimeout(() => {
    let numero1 = 5;
    let numero2 = 10;
    let valorNuevo = numero1 * numero2;
    console.log(`El resultado del proceso es: ${valorNuevo}`)
}, 1000)

// Declare function
function fetchData(callback) {
    setTimeout(() => {
        const datos = { name: "John", age: 30 };
        callback(datos)
    }, 1000);
}

// Execute function with a callback
fetchData(dat => console.log(dat));

console.log("Data is being fetched...");

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello from the promise!");
        reject('No se puede jefe')
    }, 2000);
});
console.log(myPromise)

myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(()=>{
        console.log('Promesa Cumplida')
    });


//metodo all en promesas
let promise1 = fetch('https://jsonplaceholder.typicode.com/posts/1');
let promise2 = fetch('https://jsonplaceholder.typicode.com/posts/2');
let promise3 = fetch('https://jsonplaceholder.typicode.com/posts/3');

Promise.all([promise1, promise2, promise3])
.then((values) => {
  console.log(values);
})