// Code your solution here
function findMatching(drivers, name) {
    const caseFilter = name.toLowerCase();
    
    const driverFilter = drivers.filter(
        item => item.toLowerCase() === caseFilter
        );
    
    return driverFilter;
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(x => x.startsWith(letters))
};

function matchName(drivers, name) {
    return drivers.filter(x => x.name === name);
}