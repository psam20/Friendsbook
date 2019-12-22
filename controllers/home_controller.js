// Our controller is a set of diffrent actions 

// Views template are renderes into controllers file.

module.exports.home=function(req,res){
    // In res.end  we dont use semicolon .
    return res.render('home',{
        title : "Welcome to FriendsBook"
    });
}