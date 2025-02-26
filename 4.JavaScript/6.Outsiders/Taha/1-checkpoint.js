// let num = 4
// for ( let i = 1 ; i <= 10 ; i++ ) {
//     console.log( '${num} * $ {i} = ${num * i}');
// }

for (let i = 1 ; i <= 100; i++) {
    if (i % 10 === 0 ){
        console.log('checkpoint : 10');
    }
    if (i % 20 === 0 ){
        console.log('checkpoint : 20');
    }
    if (i % 30 === 0 ){
        console.log('checkpoint : 30');
    }
    if (i % 40 === 0 ){
        console.log('checkpoint : 40');
    }
    
    if ( i === 50 ) {
        console.log('halfway there');
    }
    if (i % 60 === 0 ){
        console.log('checkpoint : 60')
    }
    if (i % 70 === 0 ){
        console.log('checkpoint : 70');
    }
    if (i % 80 === 0 ){
        console.log('checkpoint : 80');
    }
    if (i % 90 === 0 ){
        console.log('checkpoint : 90');
    }
    if ( i === 100 ) {
        console.log( "you made it");
    }
}