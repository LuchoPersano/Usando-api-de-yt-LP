function consoleLog(text){
    console.log(text);
}

function verifyLoginStatus(){
    consoleLog('Verificando si hay alguna sesión iniciada...');
    FB.getLoginStatus(function(response) {
        consoleLog(response);
        loginStatus = response.status;
    });
    if(loginStatus != 'connected'){
        loginBtn.removeAttribute('disabled');
        logoutBtn.setAttribute('disabled', '');
        loginBtn.innerHTML = 'Iniciar Sesión con facebook';
    } else {
        logoutBtn.removeAttribute('disabled');
        loginBtn.innerHTML = 'Sesión iniciada correctamente :)'
    }
}

function login(){
    FB.login(function(response){
        // consoleLog(response);
        consoleLog('Resultado del inicio de sesión: ' + response.status);
        if(response.status == 'connected'){
            loginBtn.setAttribute('disabled', '');
            logoutBtn.removeAttribute('disabled');
            loginBtn.innerHTML = 'Sesión iniciada correctamente :)'
        } else {
            logoutBtn.setAttribute('disabled', '');
        }
    }, {scope: 'publish_video'})
}

function logout(){
    consoleLog('Se solicitó cerrar sesión...')
    FB.logout(function(response){
        consoleLog('Respuesta del servidor:');
        consoleLog(response);
    })
}