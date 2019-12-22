const express = require('express');
// express function is a top level function exported by expresss module.
const app=express();
const port = 7000;
// we need to use that router function created in Router folder , so we import that file in  our main index.js file
app.use('/',require('./routes/index'));
// set up the view engine
app.set('view engine','ejs');
app.set('views','./views');
app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server ${err}`);
    }
    console.log(`server is up and running on port ${port}`);
})