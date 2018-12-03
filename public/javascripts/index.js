$(document).ready(function(){

    var emailstorage = localStorage.getItem("email");

    if(emailstorage){
        $("#login").prop("href", "editUser.html");
        $("#login").text("Editar Perfil");

        $("#cadastro").prop("href", "logout.html");
        $("#cadastro").text("Logout");

        $("#cadastrobutton").prop("href", "editEvent.html");
        $("#cadastrobutton").text("Ver Eventos");
    }
 });