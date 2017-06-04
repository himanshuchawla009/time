
var validator = require('validator')


module.exports = function(app) {
    var day,year,month;

    app.get('/:query', function(req, res) {
var paramDate=new Date(req.params.query)
 
 
 
 var newd=dateToNatural(paramDate);
 
 
 var arrayDate=newd.split('_')
 var naturalDate=arrayDate[0];
 
 var unix=arrayDate[1];

 
 
 
 var obj={
    unixstamp:unix,
    natural:naturalDate
}
 
 

 res.send(obj);
        
    
    })




//function to convert the original query date whether natural or unix in to a string which contain
//both unix and natural date
//return null if date is invalid

function dateToNatural(pdat){
  var pdate=pdat.toString();
  

 var date=validator.toDate(pdate)

 
 if(date != null){
var ndate=convertToNatural(date) //convert to formatted date (mmmm dd,yyyy)
var u=daToUnix(pdate)




return ndate + '_' + u;
 }
 else{
   var udate=unixToDa(pdate)
   
   var validate=validator.toDate(udate)
   if(validate != null){
     var unix=pdate
     
     
     
   }
else{
  return 'invalid datee'
  
}
return udate + '-' + unix;
 }
 return 'invalid dateee'


}

function unixToDa(unixtime){
  var uToD =new Date(unixtime * 1000)
  
  
  console.log(uToD)
  var str=uToD.toGMTString()
  
  var dd=str.split(' ')
  var formatted=dd[1] + ' ' + dd[2] +','+dd[3]
  
  var gmtDate=new Date(formatted)
  
  var d=convertToNatural(gmtDate)
  console.log(d)  ;
  return d;


}
function daToUnix(dlocal){
  var myDate = new Date(dlocal); // Your timezone!
var uni = myDate.getTime()/1000.0;
return uni;

}


//function to format the date returned by validate function if the date is valid

function convertToNatural(date){
  var natDate


day=date.getDate();
  year=date.getFullYear();

  month=date.getMonth()
 switch(month){
   case 0:
   month="january"
   break;
   case 1:
   month="february"
   break;
   
   case 2:
   month="march"
   break;
   
   case 3:
   month="april"
   break;
   
   case 4:
   month="may"
   break;
   
   case 5:
   month="june"
   break;
   
   case 6:
   month="july"
   break;
   
   case 7:
   month="august"
   break;
   
   case 8:
   month="september"
   break;
   
   case 9:
   month="october"
   break;
   
   case 10:
   month="november"
   break;
   
   case 11:
   month="december"
   break;
   }
 natDate=month + ' '+  day  + ',' + year
 
 return natDate}
 
 
 
};
