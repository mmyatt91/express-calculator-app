const { getMean, getMode, getMedian } = require("./operations") 

describe ("find mean", function () {
    test('find mean of numbers array', function () {
        let nums = [2,4,6,8];
        expect(getMean(nums)).toEqual(5)
    })
    test('find mean of empty array', function () {
        let nums = [];
        expect(getMean(nums)).toEqual(NaN)
    })
})


describe ("find median", function () {
    test('find median of even nums array', function () {
        let nums = [2,4,6,4,8];
        expect(getMedian(nums)).toEqual(4)
    })
    test('find median of odd nums array', function () {
        let nums = [1,3,5,3,7];
        expect(getMedian(nums)).toEqual(3)
    })
})

describe ("find mode", function () {
    test('find mode of nums array', function () {
        let nums = [2,4,6,4,8];
        expect(getMode(nums)).toEqual([4])
    })
    test('find multiple modes of nums array', function () {
        let nums = [1,3,5,3,7,5,5];
        expect(getMode(nums)).toEqual([5])
    })
})