function exibeUsuarios() {
    $.ajax({
        url: '/users/showAll',
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
                var user;
                var userData;

                for (i = 0; i < call.length; i++) {
                    user = call[i];

                    userData = 'ID: ' + user._id +
                        '<br>Nome: ' + user.name +
                        '<br>Email: ' + user.email +
                        '<br>Senha: ' + user.password +
                        '<br>Data de Nascimento: ' + user.birth +
                        '<br>Educação: ' + user.education +
                        '<br>Interesse: ' + user.interest +
                        '<br>CPF/RG: ' + user.CPF_RG +
                        '<br>Inscrições: ' + user.subscriptions +
                        '<br><a href="#" onclick="deletaUsuario(' + user.email + ');"> EXCLUIR</a>';

                    document.getElementById('result').innerHTML += userData + '<br><br>';
                    //                    location.reload();
                }
            }
        }
    });
}

function exibeUmUsuario(emailhtml) {
    $.ajax({
        url: '/users/showAll',
        type: 'GET',
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
                var user;
                var userData;

                for (i = 0; i < call.length; i++) {
                    user = call[i];

                    if (emailhtml === user.email) {

                        userData = 'ID: ' + user._id +
                            '<br>Nome: ' + user.name +
                            '<br>Email: ' + user.email +
                            '<br>Senha: ' + user.password +
                            '<br>Data de Nascimento: ' + user.birth +
                            '<br>Educação: ' + user.education +
                            '<br>Interesse: ' + user.interest +
                            '<br>CPF/RG: ' + user.CPF_RG +
                            '<br>Inscrições: ' + user.subscriptions +
                            '<br><a href="#" onclick="deletaUsuario(' + user.email + ');"> EXCLUIR</a>';

                        document.getElementById('result').innerHTML += userData + '<br><br>';
                        //                    location.reload();
                    }
                }
            }
        }
    });
}

function exibeNomeUsuario(emailhtml) {
    $.ajax({
        url: '/users/showAll',
        type: 'GET',
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
                var user;

                for (i = 0; i < call.length; i++) {
                    user = call[i];

                    if (emailhtml === user.email) {

                        document.getElementById('fullName').value = user.name;
                        document.getElementById('birthDate').value = user.birth;
                        document.getElementById('password').value = user.password;
                        document.getElementById('email').value = user.email;
                        document.getElementById('nivelEscolaridade').value = user.education;
                        document.getElementById('interests').value = user.interest;
                        //                    location.reload();
                    }
                }
            }
        }
    });
}

/*
function deletaUsuario() {
    $.ajax({
        url: '/users/delete/',
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
                var user;
                var userData;

                for (i = 0; i < call.length; i++) {
                    user = call[i];

                    userData = 'ID: ' + user._id +
                        '<br>Nome: ' + user.name +
                        '<br>Email: ' + user.email +
                        '<br>Senha: ' + user.password +
                        '<br>Data de Nascimento: ' + user.birth +
                        '<br>Educação: ' + user.education +
                        '<br>Interesse: ' + user.interest +
                        '<br>CPF/RG: ' + user.CPF_RG +
                        '<br>Inscrições: ' + user.subscriptions;

                    document.getElementById('result').innerHTML += userData + '<br><br>';
                    //                    location.reload();
                }
            }
        }
    });
}
*/
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