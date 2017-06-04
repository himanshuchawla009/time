var express=require('express')

var app=express()
var api = require('./time.js');
app.use('/static',express.static(__dirname + '/static'))
app.set('views', __dirname + '/views');
app.set('view engine','ejs')
app.set('port', (process.env.PORT || 5000));


app.get('/',function(req,res){
    res.render('index.ejs')
})
api(app)
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
