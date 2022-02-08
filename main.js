console.log("Este es Lucio intentando aplicar la API de youtube para livestreams :D");
//holaaa
console.log("JS v1.0.0.1 running");

//Variables globales
var authStatus = 0;
var clientStatus = 0;

function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/youtube"})
        .then(function() { console.log("Sign-in successful"); authStatus = 1; },
              function(err) { console.error("Error signing in", err); authStatus = 0; });
}
function loadClient() {
  return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
      .then(function() { console.log("GAPI client loaded for API"); clientStatus = 1; },
            function(err) { console.error("Error loading GAPI client for API", err); clientStatus = 0; });
}
function preExe(){
  
}
// Make sure the client is loaded and sign-in is complete before calling this method.
function execute() {
  if(authStatus != 0 && clientStatus != 0 && titleIn.value != '' && descriptionIn.value != '' && dateIn.value != '' && privacyIn.value != 'Seleccione la privacidad de la transmisión'){
    console.log('Iniciando petición a la API de youtube.');
    console.log('Petición:');
    var req = {
      "part": [
        "snippet,contentDetails,status"
      ],
      "resource": {
        "snippet": {
          "title": titleIn.value,
          "scheduledStartTime": dateIn.value,
          "description": descriptionIn.value,
        },
        "contentDetails": {
          "enableClosedCaptions": true,
          "enableContentEncryption": true,
          "enableDvr": true,
          "enableEmbed": true,
          "recordFromStart": true,
          "startWithSlate": true,
          "enableAutoStart": true
        },
        "status": {
          "privacyStatus": privacyIn.value,
          "selfDeclaredMadeForKids": false
        }
      }
    };
    console.log(req);

    return gapi.client.youtube.liveBroadcasts.insert({
      "part": [
        "snippet,contentDetails,status"
      ],
      "resource": {
        "snippet": {
          "title": titleIn.value,
          "scheduledStartTime": dateIn.value,
          "description": descriptionIn.value,
        },
        "contentDetails": {
          "enableClosedCaptions": true,
          "enableContentEncryption": true,
          "enableDvr": true,
          "enableEmbed": true,
          "recordFromStart": true,
          "startWithSlate": true,
          "enableAutoStart": true
        },
        "status": {
          "privacyStatus": privacyIn.value,
          "selfDeclaredMadeForKids": false
        }
      }
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  } else if(authStatus == 0 || clientStatus == 0){
    console.log('Error: no se puede iniciar la petición porque no se ha iniciado sesión.');
  } else {
    console.log('Error: no se puede iniciar la petición. Rellene los campos solicitados.');
  }

}
gapi.load("client:auth2", function() {
  gapi.auth2.init({client_id: "38164434341-tiliciovo1hrej80rr815k4bq59fi09g.apps.googleusercontent.com"});
});