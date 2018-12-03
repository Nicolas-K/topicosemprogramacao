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


function exibeDadosEvento(namehtml) {
    $.ajax({
        url: '/events/showAll',
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
                    var event;
        
                    for (i = 0; i < call.length; i++) {
                        event = call[i];
        
                        if (namehtml === event.name) {
                            var startDate = moment(event.startDate).format('YYYY-MM-DD');
                            $('#startDate').val(startDate);
                            var endDate = moment(event.endDate).format('YYYY-MM-DD');
                            $('#endDate').val(endDate);


                            document.getElementById('eventID').value = event._id;
                            document.getElementById('eventName').value = event.name;
                            document.getElementById('preco').value = event.price;
                            document.getElementById('place').value = event.place;
                            document.getElementById('descEvent').value = event.description;
                            document.getElementById('attractions').value = event.attractions;
                            document.getElementById('area').value = event.area;
                                //                    location.reload();
                        }
                    }
            }
        }
    });
}
