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
        consoleLog('Resultado del inicio de sesión: ');
        consoleLog(response);
        if(response.status == 'connected'){
            accessToken = response.authResponse.accessToken;
            loginBtn.setAttribute('disabled', '');
            logoutBtn.removeAttribute('disabled');
            loginBtn.innerHTML = 'Sesión iniciada correctamente :)'
        } else {
            logoutBtn.setAttribute('disabled', '');
        }
        getPageAccessToken();
    }, {scope: 'publish_video, pages_manage_posts, pages_read_engagement, pages_read_user_content, pages_show_list'})
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
    fetch('https://graph.facebook.com/v13.0/103263762285689/live_videos?planned_start_time=1644429600&privacy=public&status=SCHEDULED&Este+es+el+titulo&description=EstaLaDescripcion&access_token=' + accessToken, { method: 'POST' })
        .then(response => response.json())
        .then(data => {
            consoleLog(data);
        })
}

function getPageAccessToken(){
    fetch('https://graph.facebook.com/me/accounts?access_token=' + accessToken)
        .then(response => response.json())
        .then(data => {
            pagesList = data.data;
        })
}