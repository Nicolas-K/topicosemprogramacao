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
        },
        success: function (resp){
            if (resp.status === "ERRO")
                alert('Erro: ' + resp);
            
            else {
                // grava usuário logado n sessão do navegador
                window.localStorage.setItem("userId", resp._id);
                window.localStorage.setItem("userName", resp.name);

                window.location.href = '/index.html';
            }
        }
     
    });
}



