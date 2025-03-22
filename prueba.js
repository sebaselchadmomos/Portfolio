function persistence(num) {
    let string = num.toString();
    let array = string.split("");
    let result = 0;
    let multiplications = 0;
    console.log(array)
    for(let i = 0; i + 1 < array.length; i++){
        result = array[i] * array[i + 1]
        multiplications++;
        
        result = persistence(result)
        
        
    }
    return result
}
console.log(persistence(39))