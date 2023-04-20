const reverseString = (string) => {
    let reversed = []
    for (let i = string.length; i >= 0; i--) {
        reversed.push(string[i])
    }
    return reversed.join("")
}

console.log(reverseString("Teste String Invertida"))