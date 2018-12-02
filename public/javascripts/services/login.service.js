function userLogin(email, password){
    $.ajax({
        url: "/users/login",
        dataType: "json",
        method:"POST", 
        data:{email:email, password:password},
        error: function(err){
            console.log(err);
        },
        success: function (resp){
            if (resp.status === "ERRO")
                alert('Erro: ' + resp.data);
            
            else {
                console.log(resp);
                alert("resp");
                //window.location.href = '/listaCliente.html';
            }

        }
        
    });
}