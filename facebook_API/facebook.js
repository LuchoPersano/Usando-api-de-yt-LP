// Codeado por Lucio Prsano

consoleLog('Este es Lucio intentando programar una emisión en directo con la API de facebook.')

// SDK de facebook API
window.fbAsyncInit = function() {
    FB.init({
      appId      : '325922262796000',
      cookie     : true,
      xfbml      : true,
      version    : '13.0'
    });
      
    FB.AppEvents.logPageView();   
      
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


// Verifica si la sesión está iniciada
setTimeout(() => {
    consoleLog('Verificando si hay alguna sesión iniciada...');
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
}, 2000);