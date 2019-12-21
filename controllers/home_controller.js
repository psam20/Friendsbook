// Our controller is a set of diffrent actions 

module.exports.home=function(req,res){
    // In return statement we dont use semicolon .
    return res.end('<h1>Express is Up for Friendsbook </h1>')
}