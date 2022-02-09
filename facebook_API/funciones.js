function consoleLog(text){
    console.log(text);
}

function verifyLoginStatus(){
    consoleLog('Verificando si hay alguna sesión iniciada...');
    FB.getLoginStatus(function(response) {
        consoleLog(response);
        loginStatus = response.status;
        accessToken = response.authResponse.accessToken;
        if(loginStatus != 'connected'){
            loginBtn.removeAttribute('disabled');
            logoutBtn.setAttribute('disabled', '');
            loginBtn.innerHTML = 'Iniciar Sesión con facebook';
        } else if(loginStatus == 'connected'){
            logoutBtn.removeAttribute('disabled');
            loginBtn.innerHTML = 'Sesión iniciada correctamente :)'
            getPageAccessToken();
        }
    });
}

function login(){
    FB.login(function(response){
        consoleLog('Resultado del inicio de sesión: ');
        consoleLog(response);
        accessToken = response.authResponse.accessToken;
        loginStatus = response.status;
        if(response.status == 'connected'){
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
    fetch('https://graph.facebook.com/v13.0/103263762285689/live_videos?planned_start_time=1644429600&status=SCHEDULED_LIVE&Este+es+el+titulo&schedule_custom_profile_image=' + imgData + '&description=EstaLaDescripcion&access_token=' + pageAccessToken, { method: 'POST' })
        .then(response => response.json())
        .then(data => {
            consoleLog(data);
        })
}

function getPageAccessToken(){
    fetch('https://graph.facebook.com/me/accounts?access_token=' + accessToken)
        .then(response => response.json())
        .then(data => {
            pagesList = data.data; //Por las dudas guardo la lista de páginas en un array global
            var list = data.data;
            var pageObj = list.find(page => page.name == 'Prueba LP');
            pageAccessToken = pageObj.access_token;
            consoleLog('Access Token de la página ' + pageObj.name + ' ha sido obtenido exitosamente.');
        })
}

function getImgData(file){
    consoleLog('Entró a la función');
    var input = file.target;

    var reader = new FileReader();
    reader.onload = function(){
      var dataURL = reader.result;
      imgData = dataURL;
      consoleLog(dataURL);
      consoleLog('Imagen OK');
    };
    reader.readAsDataURL(input.files[0]);
}