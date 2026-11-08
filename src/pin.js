export function esPinValido(pin) {
    if (pin === null || pin === undefined) return false;
    
    const pinStr = String(pin).trim();
    
    const esValido = (pinStr.length === 4 || pinStr.length === 6) &&
                     /^\d+$/.test(pinStr) &&
                     ![...pinStr].every(d => d === pinStr[0]);

    return esValido;
}