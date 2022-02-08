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
        loginBtn.innerHTML = 'Iniciar Sesión';
    }
}

function login(){
    FB.login(function(response){
        // consoleLog(response);
        consoleLog('Resultado del inicio de sesión: ' + response.status);
        if(response.status == 'connected'){
            loginBtn.setAttribute('disabled', '');
            loginBtn.innerHTML = 'Sesión iniciada correctamente :)'
            loginBtn.insertAdjacentHTML('afterend', '<button class="get-login-status-btn" id="getLoginStatusBtn" onclick="getLoginStatus()">Consultar estado de inicio de sesión</button>')
        }
    }, {scope: 'email'})
}