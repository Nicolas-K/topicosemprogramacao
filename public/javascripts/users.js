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

function exibeNomeUsuario() {
    var emailhtml = localStorage.getItem("email");

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

function inscreveUsuarios(idEvento, emailUsuario) {
    var input = {
                    "email": emailUsuario
                };

        document.getElementById('result').innerHTML += input;

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

function setCookie(cname, cvalue, exdays){
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function userLogin(emailUsuario, senhaUsuario) {
        var input = {
                        "email": emailUsuario,
                        "password": senhaUsuario
                    };

        document.getElementById('result').innerHTML += input;

    $.ajax({
        url: '/users/login/',
        type: 'POST',
        dataType: 'json',
        data: input,

        error: function (call) {
            alert('Erro 1: ' + call.data);
        },

        success: function (call) {
            if (call.status === 404 || call.status === 500 || call.status === 409) {
                alert('Erro 2: ' + call.data);
            }

            else {
                setCookie('email', emailUsuario, 7);
                alert('Login Efetuado com Sucesso!');
            }
        }
    });
}