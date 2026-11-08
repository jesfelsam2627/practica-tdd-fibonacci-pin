export function fibonacci(n){
    if(typeof n!=='number' || !Number.isInteger(n) || n<0){
        throw new RangeError("solo numeros mayor de 0");
    }
    if(n<0) throw new RangeError("solo numeros mayor de 0");
    if(n===0)return 0;
    if(n===1)return 1;
    let a=0,b=1;
    for (let i=2; i<=n;i++){
        let temp=a+b;
        a=b;
        b=temp;
    }
    return b;
}