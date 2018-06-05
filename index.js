const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT;

testRouter = express.Router();

testRouter.use(function(req,res,next){
    console.log('testRouter use');
    next();
});
testRouter.get('/getValueDoubled/:value',function(req,res){

    var resultValue = req.params.value;

    resultValue *= 2;

    res.send(resultValue+' is the value doubled');

})

app.listen(port,function(){
    console.log(`server live on ${port} ` );
})


app.use('/test',testRouter);