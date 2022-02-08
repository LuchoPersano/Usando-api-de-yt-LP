// Codeado por Lucio Prsano

consoleLog('Este es Lucio intentando programar una emisión en directo con la API de facebook.');

// Declaración de variables
var loginBtn = document.getElementById('loginBtn');
var loginStatus = '';

// Event listeners
loginBtn.addEventListener(onclick, login())

// Verifica si la sesión está iniciada
setTimeout(() => {

    loginStatus = getLoginStatus();
    if(loginStatus != 'connected'){
        loginBtn.setAttribute('disabled', 'false')
    }

}, 2000);