var express=require('express')
var moment=require('moment')
var app=express()
app.use('/static',express.static(__dirname + '/static'))
app.set('views', __dirname + '/views');
app.set('view engine','ejs')
app.set('port', (process.env.PORT || 5000));


app.get('/',function(req,res){
    res.render('index.ejs')
})
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
