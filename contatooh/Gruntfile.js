module.exports = function (grunt) {
    
    grunt.initConfig ({
        copy : {    // Copia o projeto para o diretório 'dist'
            project : {
                expand: true,
                cwd: '.',
                src: ['**', '!Gruntfile.js', '!package.json', '!public/bower.json'],
                dest : 'dist'
            }
        },
        clean : {   // Limpa o diretório 'dist'. 
            dist : {
                src : 'dist'
            }
        },
        usemin : {
            html : 'dist/app/views/**/*.ejs'
        },
        useminPrepare : {
            options : {
                root : 'dist/public',
                dest : 'dist/public'
            },
            html : 'dist/app/views/**/*.ejs'
        },
        ngAnnotate : {
            scripts : {
                expand : true,
                src : ['dist/public/js/**/*.js']
            }
        } 
    });

    // task default: grunt
    grunt.registerTask('default', ['dist', 'minifica']);
    
    // task grouped: grunt dist
    grunt.registerTask('dist', ['clean', 'copy']);  
    
    // Lê metadados das páginas
    // Concatena arquivos css e js
    // Minifica scripts baseado na configuração do useminPrepare
    // Minifica arquivos css baseado na configuração do useminPrepare
    // Alterar HTML para apontar para os arquivos concatenas e minificados
    grunt.registerTask('minifica', ['useminPrepare', 'ngAnnotate', 'concat', 'uglify', 'cssmin', 'usemin']);
    
    // Carrega as dependências
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-ng-annotate')
};