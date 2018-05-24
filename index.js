const express = require('express');
const app = express();

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

app.listen(3000,function(){
    console.log('server live on 3000');
})


app.use('/test',testRouter);