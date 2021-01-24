const express = require ('express');
const app = express()
const ExpressError = require('./expressError')
const { mean, median, mode} = require('./operations')


app.get('/mean', function (req, res, next) {
    try {
        let numArray = req.query.nums.split(",").map( val => {
            if (val === "") {
                throw new ExpressError('Numbers are required', 400)
            }
            if (isNaN(parseInt(val))) {
                throw new ExpressError(`${val} is not a number`, 400)
            }
            return parseInt(val)
        }) 
        respObj = {
            "response": "mean",
            "value": getMean(numArray)
        }
        return res.json(respObj)
    }
    catch(err) {
        next(err)
    }
})

app.get('/median', function (req, res, next) {
    try {
        let numArray = req.query.nums.split(",").map( val => {
            if (val === "") {
                throw new ExpressError('Numbers are required', 400)
            }
            if (isNaN(parseInt(val))) {
                throw new ExpressError(`${val} is not a number`, 400)
            }
            return parseInt(val)
        }) 
        respObj = {
            "response": "median",
            "value": getMedian(numArray)
        }
        return res.json(respObj)
    }
    catch(err) {
        next(err)
    }
})

app.get('/mode', function (req, res, next) {
    try {
        let numArray = req.query.nums.split(",").map( val => {
            if (val === "") {
                throw new ExpressError('Numbers are required', 400)
            }
            if (isNaN(parseInt(val))) {
                throw new ExpressError(`${val} is not a number`, 400)
            }
            return parseInt(val)
        }) 
        respObj = {
            "response": "mode",
            "value": getMode(numArray)
        }
        return res.json(respObj)
    }
    catch(err) {
        next(err)
    }
})

app.get('/all', function (req, res, next) {
    try {
        let numArray = req.query.nums.split(",").map( val => {
            if (val === "") {
                throw new ExpressError('Numbers are required', 400)
            }
            if (isNaN(parseInt(val))) {
                throw new ExpressError(`${val} is not a number`, 400)
            }
            return parseInt(val)
        }) 
        respObj = {
            "response": "all",
            "mean": getMean(numArray),
            "median": getMedian(numArray),
            "mode": getMode(numArray)
        }
        return res.json(respObj)
    }
    catch(err) {
        next(err)
    }
})

app.use(function (err, req, res, next) {
    let status = err.status || 500;
    let message = err.message;
    return res.status(status).json({
        error: {message, status}
    })
})

app.listen(3000, function(req, res) {
    console.log('App on port 3000');
})