function consoleLog(text){
    console.log(text);
}

function getLoginStatus(){
    consoleLog('Verificando si hay alguna sesión iniciada...');
    FB.getLoginStatus(function(response) {
        consoleLog(response);
        // loginStatus = response.status;
        return response.status;
    });
}

function login(){
    consoleLog('Boton presionado');
}