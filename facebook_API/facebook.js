// Codeado por Lucio Prsano

consoleLog('Este es Lucio intentando programar una emisión en directo con la API de facebook.');

// Declaración de variables
var loginBtn = document.getElementById('loginBtn');
var loginStatus = '';

// Verifica si la sesión está iniciada
setTimeout(() => {
    verifyLoginStatus();
}, 2000);