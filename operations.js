// Mean: Add all the numbers of the array and divide them by the length of the array.
function getMean (arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i += 1){
        sum += arr[i]
    }
    return sum/arr.length 
}

// Median: The middle number of the array
function getMedian (arr) {
    var median = 0, numsLen = arr.length;
    arr.sort()

    if (
        numsLen % 2 === 0
    ) {
        median = (arr[numsLen / 2 -1 ]+ arr[numsLen / 2]) / 2;
    } else {
        median = arr[(numsLen - 1) / 2];
    }
    return median 
}

// Mode: The number repeated the most within the array.
function getMode (arr) {
    var modes = [], count = [], i, number, maxIndex = 0;
    for (i=0; i < arr.length; i += 1) {
        number = arr[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }
    for (i in count)
        if (count.hasOwnProperty(i)) {
            if(count[i] === maxIndex) {
                modes.push(Number(i));
            }
        }
    return modes;
}

module.exports = {
    getMean, getMedian, getMode
}