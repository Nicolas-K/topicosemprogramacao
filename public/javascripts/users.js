$(document).ready(function () {
    $('.cpf-mask').mask('000.000.000-00', { reverse: true });
});

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
            } else {
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

function exibeDadosUsuario(emailstorage) {
    var emailstorage = localStorage.getItem("email");

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
            } else {
                var i;
                var user;

                for (i = 0; i < call.length; i++) {
                    user = call[i];

                    if (emailstorage === user.email) {
                        var birthDate = moment(user.birth).format('YYYY-MM-DD');
                        $('#birthDate').val(birthDate);

                        document.getElementById('fullName').value = user.name;
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

function inscreveUsuario() {
    var idEvento = document.getElementById("eventID").value;
    var emailUsuario = localStorage.getItem("email");
    var input = {
                    "email": emailUsuario
                };

    $.ajax({
        url: '/users/subscribe/' + idEvento,
        type: 'PUT',
        dataType: 'json',
        data: input,

        error: function (call) {
            if (call.status === 404 || call.status === 500 || call.status === 409) {
                alert('Erro: ' + call.data);
            }

            else {
                alert('Inscrição Efetuada com Sucesso!');
            }
        },

        success: function (call) {
            alert('Erro: ' + call.data);
        }
    });
}

function registrarUsuario() {
    
    var birthdate = document.getElementById("birthDate").value
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var nivelEscolaridade = localStorage.getItem("nivelEscolaridade");
    var interests = document.getElementById("interests").value;

    var input = {
                    "name": fullname,
                    "email": email,
                    "password": password,
                    "birth": birthdate,
                    "education": nivelEscolaridade,
                    "interest": interests
                };

                alert('chegou aqui');

    $.ajax({
        url: '/users/register/' + idEvento,
        type: 'POST',
        dataType: 'json',
        data: input,

        error: function (call) {
            
        },

        success: function (call) {
            alert('Erro: ' + call.data);
            if (call.status === 404 || call.status === 500) {
                alert('Erro: ' + call.data);
            }

            else {
                alert('Registro Efetuado com Sucesso!');
            }
        }
    });
}