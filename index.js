const express = require('express');
const port = 5000;
// express function is a top level function exported by expresss module.
const app=express();

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server ${err}`);
    }
    console.log(`server is up and running on port ${port}`);
})