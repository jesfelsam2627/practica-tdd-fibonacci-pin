export function fibonacci(n){
    if(typeof n!=='number' || !Number.isInteger(n) || n<0){
        throw new RangeError("solo numeros mayor de 0");
    }
    let a = 0;
    let b = 1;
    
    for (let i = 0; i < n; i++) {
        [a, b] = [b, a + b];
    }
    
    return a;
}