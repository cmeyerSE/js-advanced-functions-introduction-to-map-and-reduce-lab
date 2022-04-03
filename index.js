function mapToNegativize(sourceArray) {
    let negativizedArray = []
    sourceArray.forEach(num => negativizedArray.push(num * -1));
    return negativizedArray;
}

function mapToNoChange(sourceArray) {
    return sourceArray;
}

function mapToDouble(sourceArray) {
    let doubledArray = []
    sourceArray.forEach(num => doubledArray.push(num * 2))
    return doubledArray;
}

function mapToSquare(sourceArray) {
    let squaredArray = []
    sourceArray.forEach(num => squaredArray.push(num ** 2))
    return squaredArray;
}

function reduceToTotal(sourceArray, startingPoint=0) {
    let total = startingPoint;
    for (const num of sourceArray) {
        total += num;
    };
    return total
}

function reduceToAllTrue(sourceArray) {
    let trueOrFalse = true;
    for (const word of sourceArray) {
        trueOrFalse = (trueOrFalse && !!word)
    };
    return trueOrFalse;
}

function reduceToAnyTrue(sourceArray) {
    for (const word of sourceArray) {
        if (!!word) {return true}
    };
    return false;
}
