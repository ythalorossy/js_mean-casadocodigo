var passport = require('passport');

module.exports = function (app) {

    app.get('/', function (req, res, next) {
        
        if (req.isAuthenticated()) {

            // Permite o acesso a outras rotas 
            return next();
        } else {
            // Renderiza o formulario auth.ejs
            res.render("auth");
        }
    });
    
    app.route('/auth/github')
        .get(passport.authenticate('github'));

    app.route('/auth/github/callback')
        .get(passport.authenticate('github', {
            successRedirect: '/'
        }));

    app.route('/logout')
        .get(function (req, res) {
            req.logOut();
            res.redirect('/');
        });

};