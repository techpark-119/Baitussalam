// Fixed this code using callback

let data;

function fetchData() {
    setTimeout(() => {
        data = { name: "John", age: 30 },2000)
}

console.log(data)

fetchData()

console.log("Data is being fetched...")