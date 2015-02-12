var express         = require('express'),
    load            = require('express-load'),
    path            = require('path'),
    bodyParser      = require('body-parser'),
    cookieParser    = require('cookie-parser'),
    session         = require('express-session'),
    passport        = require('passport'), 
    helmet          = require('helmet');

module.exports = function (app) {
    
    // Configurações de ambiente
    app.set('port', 3000);

    //Middlewares
    
    // Gerenciador de templates http://embeddedjs.com
    app.set('view engine', 'ejs');
    
    // Pasta onde ficam os arquivos de templates
    app.set('views', './app/views');            
    
    // Pasta com recursos estáticos: html, js, css, etc    
    app.use(express.static('./public'));        
    app.use(bodyParser.urlencoded({extended: true}));
    
    // Efetua o parse dos dados da requisição para req.body
    app.use(bodyParser.json());
    
    // Garante os verbos HTTP (get, put, delete...)
    app.use(require('method-override')());      
    
    // Parser "header cookies da req" para req.cookies e armazena o ID da sessão
    app.use(cookieParser());
    app.use(session({
        // cookie é assinado com essa chave
        secret : 'homem avestruz',
        // Informações serão acessíveis através de cookie a cada requisição
        resave : true,                  
        saveUninitialized : true        
    }));
    
    // Inicializa o Passport
    app.use(passport.initialize());
    // Garantir sessões de login persistentes
    app.use(passport.session());
    
    // Segurança da aplicação
    app.use(helmet.xframe());
    app.use(helmet.xssFilter());
    app.use(helmet.nosniff());
    app.disable('x-powered-by' );
    app.use(helmet.hidePoweredBy({setTo : 'PHP 5.5.14' }));
    
    //
    app.use(helmet());
    
    load('models', {cwd: 'app'})    // pasta padrão alterada para 'app'
        .then('controllers')
            .then('routes/auth.js')
                .then('routes')
                    .into(app);
    
    app.get('*', function (req, res) {
        res.status(404).render('404');
        
    });
};