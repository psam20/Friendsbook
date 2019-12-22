// This controller file can control many users. 
module.exports.profile=function(req,res){
    return res.render('user_profile',{
        title : 'Users Profile Page'
    })
}