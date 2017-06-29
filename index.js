
const express = require('express')
const app = express()
const port = process.env.PORT || 3005
app.set('view engine', 'hbs')

app.use("/", express.static('media'))
app.use("/", express.static('public'))


app.get('/',function(req,res){

    res.render('home')

});


app.listen(port, function(){
  console.log("we good");
})
