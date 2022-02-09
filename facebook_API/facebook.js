// Codeado por Lucio Prsano

consoleLog('Este es Lucio intentando programar una emisión en directo con la API de facebook.');

// Declaración de variables
var loginBtn = document.getElementById('loginBtn');
var logoutBtn = document.getElementById('logoutBtn');
var loginStatus = '';
var accessToken = '';
var pageAccessToken = '';
var pagesList = [];
var imgData = '';

// Verifica si la sesión está iniciada
setTimeout(() => {
    verifyLoginStatus();
}, 2000);