function exibeEventos() {
    $.ajax({
        url: '/events/showAll',
        type: 'GET',
        dataType: 'json',

        error: function (call) {
            alert('Erro: ' + call.data);
        },

        success: function (call) {

            if (call.status === 404 || call.status === 500) {
                alert('Erro: ' + call.data);
            }

            else {
                var i;
                var event;
                var eventData;

                for (i = 0; i < call.length; i++) {
                    event = call[i];

                    eventData = 'ID: ' + event._id +
                        '<br>Nome: ' + event.name +
                        '<br>Data de Início: ' + event.startDate +
                        '<br>Data de Fim: ' + event.endDate +
                        '<br>Localização: ' + event.place +
                        '<br>Descrição: ' + event.description +
                        '<br>Atrações: ' + event.attractions +
                        '<br>Área: ' + event.area +
                        '<br>Preço: R$' + event.price +
                        '<br><a href="#" onclick="deletaEvento(' + event.email + ');">EXCLUIR</a>';

                    document.getElementById('result').innerHTML += eventData + '<br><br>';
                    //                    location.reload();
                }
            }
        }
    });
}

function exibeUmEvento(namehtml) {
    $.ajax({
        url: '/events/showAll',
        type: 'GET',
        dataType: 'json',

        error: function (call) {
            alert('Erro: ' + call.data);
        },

        success: function (call) {

            if (call.status === 404 || call.status === 500) {
                alert('Erro: ' + call.data);
            }

            else {
                var i;
                var event;
                var eventData;

                for (i = 0; i < call.length; i++) {
                    event = call[i];

                    if (namehtml === event.name) {

                        eventData = 'ID: ' + event._id +
                        '<br>Nome: ' + event.name +
                        '<br>Data de Início: ' + event.startDate +
                        '<br>Data de Fim: ' + event.endDate +
                        '<br>Localização: ' + event.place +
                        '<br>Descrição: ' + event.description +
                        '<br>Atrações: ' + event.attractions +
                        '<br>Área: ' + event.area +
                        '<br>Preço: R$' + event.price +
                        '<br><a href="#" onclick="deletaEvento(' + event.email + ');">EXCLUIR</a>';

                        document.getElementById('result').innerHTML += eventData + '<br><br>';
                        //                    location.reload();
                    }
                }
            }
        }
    });
}

function nomeDoEventoPorID(idhtml) {
    $.ajax({
        url: '/events/showAll',
        type: 'GET',
        dataType: 'json',

        error: function (call) {
            alert('Erro: ' + call.data);
        },

        success: function (call) {

            if (call.status === 404 || call.status === 500) {
                alert('Erro: ' + call.data);
            }

            else {
                var i;
                var event;
                var eventData;

                for (i = 0; i < call.length; i++) {
                    event = call[i];

                    if (idhtml === event._id) {

                        eventData = 'Nome: ' + event.name;

                        document.getElementById('result').innerHTML += eventData + '<br><br>';
                        //                    location.reload();
                    }
                }
            }
        }
    });
}

function deletaUsuario() {
    $.ajax({
        url: '/events/delete/',
        type: 'DELETE',
        dataType: 'json',

        error: function (call) {
            alert('Erro: ' + call.data);
            document.getElementById('result').innerHTML += '<br>ACONTECEU 1<br>';
        },

        success: function (call) {

            if (call.status === 404 || call.status === 500) {
                alert('Erro: ' + call.data);
                document.getElementById('result').innerHTML += '<br>ACONTECEU 2<br>';
            }

            else {
                var i;
                var event;
                var eventData;

                for (i = 0; i < call.length; i++) {
                    event = call[i];

                    eventData = 'ID: ' + event._id +
                        '<br>Nome: ' + event.name +
                        '<br>Email: ' + event.email +
                        '<br>Senha: ' + event.password +
                        '<br>Data de Nascimento: ' + event.birth +
                        '<br>Educação: ' + event.education +
                        '<br>Interesse: ' + event.interest +
                        '<br>CPF/RG: ' + event.CPF_RG +
                        '<br>Inscrições: ' + event.subscriptions;

                    document.getElementById('result').innerHTML += eventData + '<br><br>';
                    //                    location.reload();
                }
            }
        }
    });
}

/*
function deletaCliente(id) {
    $.ajax({
        url: '/cliente/deleta?id=' + id,
        type: 'post',
        dataType: 'json',
        error: function (dados) {
            alert('Erro: ' + dados.data);
        },
        success: function (dados) {
            if (dados.status === 'ERRO')
    alert('Erro: ' + dados.data);
            else {
                var divResult = document.getElementById('result');
    divResult.removeChild(document.getElementById(id));
                alert(dados.data);
                location.reload();
            }
        }
    });

    }

    function exibeClientes(clientes) {
        for (var i = 0; i < clientes.length; i++) {
        var cliente = clientes[i];
        var dadosCliente = 'ID: ' + cliente.id +
        '<br>Nome: ' + cliente.nome +
        '<br>Endereço: ' + cliente.endereco +
        '<br>Telefone: ' + cliente.telefone +
        '<br>Email: ' + cliente.email +
        '<br><a href="#" onclick="deletaCliente(' + cliente.id + ');"> EXCLUIR</a>';
        document.getElementById('result').innerHTML += dadosCliente + '<br><br>';
        }
    } */