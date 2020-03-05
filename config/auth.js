module.exports = {
    ensureAuthenticated: function(req,res,next) {
        if(req.isAuthenticated()){
            return next();
        }
        req.flash('error_msg','Please sign in to continue');
        res.redirect('/users/login');
    }
}