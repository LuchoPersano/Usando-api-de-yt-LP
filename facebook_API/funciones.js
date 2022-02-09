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
        consoleLog('Resultado del inicio de sesión: ' + response.status);
        if(response.status == 'connected'){
            accessToken = response.accessToken;
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
        consoleLog(response);
        loginStatus = response.status;
        if(loginStatus != 'connected'){
            loginBtn.removeAttribute('disabled');
            logoutBtn.setAttribute('disabled', '');
            loginBtn.innerHTML = 'Iniciar Sesión con facebook';
        } else {
            logoutBtn.removeAttribute('disabled');
            loginBtn.innerHTML = 'Sesión iniciada correctamente :)'
        }
    });
}

function stream(){
    fetch('https://graph.facebook.com/v3.3/me/live_videos?status=LIVE_NOW&access_token=' + accessToken, { method: 'POST' })
        .then(response => response.json())
        .then(data => {
            consoleLog(data);
        })
}