// Fixed this code using callback

// let data;

// function fetchData() {
//     setTimeout(() => {
//         data = { name: "John", age: 30 },2000)
// }

// console.log(data)

// fetchData()

// console.log("Data is being fetched...")

// function orderPizza(preparingPizza
//     , served) {
//     setTimeout(() => {
//         console.log('Step 1, ordered')
//         preparingPizza(served)
//     }, 4000)
// }

// function preparingPizza(served) {
//     setTimeout(() => {
//         console.log('step 2, prepared')
//         served()
//     }, 3000)
// }

// function served() {
//     setTimout(() => {
//         console.log('step 3, served')
//     }, 1000)
// }

// orderPizza(preparingPizza,served)
// preparingPizza()

function orderPizza() {
    const callback = (resolve, reject) => {
        setTimeout(() => {
            console.log('Step 1, ordered')
            resolve()
        }, 4000)
    }
}

function preparingPizza() {
    setTimeout(() => {
        console.log('step 2, prepared')
        served()
    }, 3000)
}

function served() {
    const callback =(resolve, reject) => {
        setTimeout(() => {
            console.log('step 3, served')
        }, 1000)
    }
    return new Promise(callback);
}

// const orderPizzaPromise = orderPizza();
// orderPizzaPromise.then((result) => {
//     console.log(Result);
//     const preparingPizzaPromise = preparingPizza();
// preparingPizzaPromise.then((result) => {
//     console.log(result);
//     const servedPromise = served();
//     servedPromise.then((result) => {
//         console.log(result);
//     })
//}

//  async function main() {
//      const orderPizzaPromise = await orderPizza()
//      console.log(orderPizzaMessage)
//      const prepareP
//  }
// main()

const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(response);
    const json = await response.json();
    console.log(json);
}

fetchData();