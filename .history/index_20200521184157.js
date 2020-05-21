// Add your functions here
function hey(num){
    let map = []
    for (let i = 0; i < num.length; i++) {
        map.push(-1 * map[i])
    }
    return map
}