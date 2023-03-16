console.log('Area Ganjil');
for(let a = 1; a <= 100; a++) {
        if (a % 2 == 1) {
            console.log('ini ganjil ' + a);
        
        }
}

console.log('Area Genap');
for(let i = 1; i <= 100; i++) {
    if(i % 2 == 0){
        console.log('ini genap ' + i);
    }  
}


console.log('Area Fibonacci');

let x = 0, y = 1, z = 0
for(let x = z; x <= 100000000000; x++) {  
    x = y
    y = z
    z = x + y
    console.log('ini fibonacci  ' +  x);
    
}