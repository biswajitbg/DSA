function sortAlbhabect(str){
    let x = str.split('')
    console.log(x)
    return x.sort().join(' ')
}
console.log(sortAlbhabect("bsgydeue"))


function words(arr){
    return arr.sort((a,b)=>a.length- b.length)

}
console.log(words(["Apple","Ball","Cat","Dog"]))