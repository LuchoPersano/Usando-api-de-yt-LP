// Codeado por Lucio Prsano

consoleLog('Este es Lucio intentando programar una emisión en directo con la API de facebook.')

// Verifica si la sesión está iniciada
setTimeout(() => {
    consoleLog('Verificando si hay alguna sesión iniciada...');
    FB.getLoginStatus(function(response) {
        consoleLog(response);
    });
}, 2000);