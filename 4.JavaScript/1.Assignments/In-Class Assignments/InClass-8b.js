// Fixed this code using callback

// let data;

// function fetchData() {
//     setTimeout(() => {
//         data = { name: "John", age: 30 },2000)
// }

// console.log(data)

// fetchData()

// console.log("Data is being fetched...")

function orderPizza(preparingPizza
    , served) {
    setTimeout(() => {
        console.log('Step 1, ordered')
        preparingPizza(served)
    }, 4000)
}

function preparingPizza(served) {
    setTimeout(() => {
        console.log('step 2, prepared')
        served()
    }, 3000)
}

function served() {
    setTimout(() => {
        console.log('step 3, served')
    }, 1000)
}

orderPizza(preparingPizza,served)
// preparingPizza()
// served()