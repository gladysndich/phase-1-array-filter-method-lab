const drivers = ["Shey", "Zion", "Tom", "Rael"];
function findMatching(drivers, str){
    const filterDrivers = drivers.filter((filtered) =>{
        return filtered.toUpperCase() === str.toUpperCase();
    })
    return filterDrivers;
}
function fuzzyMatch(drivers, str){
    const filterFirst = drivers.filter((firstLetter) => {
        return firstLetter[0] === str[0];
    });
    return filterFirst;
}
function matchName(drivers, str){
    const filterName = drivers.filter((filteredNames) =>{
        return filteredNames.name === str;
    });
    return filterName;
}