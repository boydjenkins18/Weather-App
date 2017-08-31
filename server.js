var express=require('express');
var app=express();
var port=process.env.PORT || 3000;
var ip=process.env.IP;


//App setup and static dir

app.set('view engine','ejs');
app.use('/public',express.static(process.cwd()+'/public'));


//route
app.get('/',function(req,res){
  res.render('pages/home')
});


//start server

app.listen(port,ip,function(){

  console.log('Server is lisening on port '+port+'...');

});
