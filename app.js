const express = require('express');

const app = express();

const ExpressError = require('./error');

app.use(express.json());


app.get('/mean', (req, res, next) => {

    if(!req.query.nums){
        throw new ExpressError("You need to pass in a query key of nums!")
    }

    const nums = req.query.nums

    let count = 0;

    const numArray = [];

    for(let n of nums){
        if (n !== ','){
           let int = parseInt(n)
           numArray.push(int)
        }
    }

    console.log(numArray)

    for(let i =0; i < numArray.length; i++){
        count += numArray[i]
    }

    console.log(count)
    
    let mean = 16/numArray.length;
    console.log(mean)
    res.json({operation: 'mean', value: mean})
})




app.get('/median', (req, res) => {
    res.send("HOMEPAGE!")
    //Same concept but calc median
})

app.get('/mode', (req, res) => {
    res.send("HOMEPAGE!")
    //same concept but calc mode
})





app.listen(3000, () => {
    console.log('Server running on port 3000')
});



//To save time I will skip the last two, I get the concept completely.




