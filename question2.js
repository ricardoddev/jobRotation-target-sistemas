function verifyIfIsFibonacci(value) {
    let number1 = 0, number2 = 1
    let fibonacci = []
    fibonacci.push(number1, number2)

    while(number2 <= value) {
        let aux = number1 + number2
        fibonacci.push(aux)
        number1 = number2
        number2 = aux
    }

    if (fibonacci.includes(value)){
        return `${value} -> Pertence`
    } else {
        return `${value} -> Não pertence`
    }
}

console.log(verifyIfIsFibonacci(15)) // exemplo que retorna 'Não pertence'
console.log(verifyIfIsFibonacci(13)) // exemplo que retorna 'Pertence'