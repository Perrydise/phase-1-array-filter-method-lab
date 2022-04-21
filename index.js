
function findMatching(driversArray, itemToFind){
    const result = driversArray.filter(element => element.toLowerCase() === itemToFind.toLowerCase())
    return result
}

function fuzzyMatch(driversArray, itemFinder){
    const result = driversArray.filter(element => element.startsWith(itemFinder))
    return result
}

function matchName(driverArray, findThis){
    const result = driverArray.filter(element => {
        console.log(element, element.name, element.name.includes(findThis))
        return element.name.includes(findThis)
    })
    return result
}