angular
    .module('contatoOh')
    .controller('ContatosController', function ($scope, Contato) {

        $scope.contatos = [];

        $scope.filtro = '';
    
        $scope.mensagem = {text: ''};

        //var Contato = $resource('/contatos/:id');
    
        function buscaContatos () {
            Contato.query(
                function (contatos) {
                    $scope.contatos = contatos;
                },
                function (erro) {
                    $scope.mensagem = {
                        texto : 'Não foi possível obter a lista de contatos'
                    }
                }
            );
        };
        
        buscaContatos();
    
        $scope.remove = function (contato) {
            Contato.delete({id: contato._id}, 
                buscaContatos, 
                function (erro) {
                    $scope.mensagem = {
                        texto : 'Não foi possível remover o contato'
                    }
                }
            );
        };
    });