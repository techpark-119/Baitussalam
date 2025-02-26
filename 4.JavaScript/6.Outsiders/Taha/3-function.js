function myfunction(){
    console.log ("i am taha")
}
myfunction();

function sum (x, y){
    s = x + y;
    return s;
}
let val = sum(43, 57);
console.log(val);

function sub(a, b){
    console.log( a + b)
}
sub(4,5);

function test(){
    return ["first return", "second return"]
}
console.log(test());

// // function 1

// function truncatestring(str,maxlength){
//     if (str.length > maxlength){
//         return str.substring(0,maxlength)+ "....";
//     }else{
//         return str
//     }
// }

// console.log("hello world!", 8);

// function 3

function countvowels(str){
    let count = 0
    for (let i = 0 ; i < str.length; i++){
        let char = str[i]
        if(char === 'a' || char ==='e' || char === 'i' || char ==='o' || char === 'u'){
            count++;
        }
    }
    return count
}
console.log(countvowels("hello world"));