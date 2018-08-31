(function (app) {
    
    var listaController = function ($scope, clienteService) {
        clienteService
            .getClientes()
            .success(function (data) {
                $scope.clientes = data;
            });

        $scope.criar = function () {
            $scope.editar = {
                cliente: {
                    Nome: "",
                    Telefone: "",
                    Endereco: "",
                    Email: ""
                }
            };
        };

        $scope.editar = function (cliente) {
            $scope.editar.cliente = cliente;
        };

        $scope.deleta = function (cliente) {
            clienteService.deletar(cliente)
                .success(function () {
                    removerClientePorId(cliente.Id);
                });
        };
        var removerClientePorId = function (id) {
            for (var i = 0; i < $scope.clientes.length; i++) {
                if ($scope.clientes[i].Id == id) {
                    $scope.clientes.splice(i, 1);
                    break;
                }
            }
        };

    };

    app.controller("listaController", listaController)

}(angular.module("cliente")))