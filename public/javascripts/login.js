function login(){
    var email = $("#inputEmail").val();
    var password = $("#inputPassword").val();

    var input = {
        email:email,
        password:password
    }

    $.ajax({
        url: "/users/login",
        dataType: "json",
        method:"POST", 
        data: input,
        error: function(err){
            console.log(err);
            alert("Desculpe, não conseguimos encontrar o usuário informado, tente novamente!")
        },
        success: function (resp){
            if (resp.status === "ERRO")
                alert('Erro: ' + resp);
            
            else {
                // grava usuário logado n sessão do navegador
                window.localStorage.setItem("email", resp.email);
                window.localStorage.setItem("name", resp.name);
                window.location.href = '/index.html'; // direcionar para a tela da Beatriz
            }
        }
     
    });
}

function logout(){
    window.localStorage.removeItem("email");
    window.localStorage.removeItem("name");
    window.location.href = '/index.html';
}



