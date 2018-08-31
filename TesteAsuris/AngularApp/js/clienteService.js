(function (app) {
    var clienteService = function ($http, clienteApiUrl) {

        var getClientes = function () {
            return $http.get(clienteApiUrl);
        };
        var getClientePorId = function (id) {
            return $http.get(clienteApiUrl + id);
        };
        var atualizar = function (cliente) {
            return $http.put(clienteApiUrl + cliente.Id, cliente);
        };
        var criar = function (cliente) {
            return $http.post(clienteApiUrl, cliente);
        };
        var deletar = function (cliente) {
            return $http.delete(clienteApiUrl + cliente.Id);
        };
        return {
            getClientes: getClientes,
            getClientePorId: getClientePorId,
            atualizar: atualizar,
            criar: criar,
            deletar: deletar
        };
    };
    app.factory("clienteService", clienteService);
}(angular.module("cliente")))