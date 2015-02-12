angular.module('contatoOh').factory('Contato', function ($resource) {
    return $resource('/contatos/:id');
});