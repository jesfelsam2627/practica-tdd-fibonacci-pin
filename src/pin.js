export function esPinValido(pin) {
    // 1. No puede ser null, undefined o no ser un string/número
    if (pin === null || pin === undefined) {
        return false;
    }

    // Convertimos a string por si pasan un número directamente (ej. 1234)
    const pinStr = String(pin);

    // 2. No puede estar vacío (ni espacios en blanco)
    if (pinStr.trim() === '') {
        return false;
    }

    // 3. Longitud 4 o 6
    if (pinStr.length !== 4 && pinStr.length !== 6) {
        return false;
    }

    // 4. Solo dígitos 0-9 (usando expresión regular)
    if (!/^\d+$/.test(pinStr)) {
        return false;
    }

    // 5. Prohibir que todos los dígitos sean iguales (ej: '1111', '888888')
    const primerDigito = pinStr[0];
    const todosIguales = [...pinStr].every(digito => digito === primerDigito);
    if (todosIguales) {
        return false;
    }

    return true;
}