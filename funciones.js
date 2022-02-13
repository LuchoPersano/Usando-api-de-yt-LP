function eliminar(elementId){
    var element = document.getElementById(elementId);
    if(!element){} else {
        var parent = element.parentNode;
        parent.removeChild(element);
    }
}

// Comunicating with te YT API

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
// Make sure the client is loaded and sign-in is complete before calling this method.
function execute() {
  if(authStatus != 0 && clientStatus != 0 && titleIn.value != '' && descriptionIn.value != '' && dateIn.value != '' && privacyIn.value != 'Seleccione la privacidad de la transmisión' && thumbnailIn.value != ''){
    console.log('Iniciando petición a la API de youtube.');
    console.log('Petición:');
    req = {
        "part": [
          "snippet,contentDetails,status"
        ],
        "resource": {
          "snippet": {
            "title": titleIn.value,
            "scheduledStartTime": dateIn.value,
            "description": descriptionIn.value,
            "thumbnails": {
                "high": {
                    "url": thumbnailIn.value,
                    "width": 480,
                    "height": 360
                },
                "default": {
                    "url": thumbnailIn.value,
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": thumbnailIn.value,
                    "width": 320,
                    "height": 180
              }
            }
          },
          "contentDetails": {
            "enableClosedCaptions": false,
            "enableContentEncryption": true,
            "enableDvr": true,
            "enableEmbed": true,
            "recordFromStart": true,
            "startWithSlate": true,
            "enableAutoStart": true,
            "enableAutoStop": false
          },
          "status": {
            "privacyStatus": privacyIn.value,
            "selfDeclaredMadeForKids": false
          }
        }
      };
    console.log(req);

    return gapi.client.youtube.liveBroadcasts.insert(req)
        .then(function(response) {
            // Handle the results here (response.result has the parsed body).
            console.log("Response:");
            console.log(response.result);
            insertResponse = response;

            var win = window.open('https://youtu.be' + response.result.id);
            if(win){
                win.focus();
            } else {
                alert('Error abriendo el link para ver la transmisión');
            }
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

var updateReq;
var updateResponse;
function update(){
    updateReq = {
        "part": [
            "snippet,id"
        ],
        "id": insertResponse.id,
        "snippet": {
            "title": "Nuevo titulo :)",
            "scheduledStartTime": dateIn.value,
            "description": descriptionIn.value,
            "thumbnails": {
                "default": {
                    "url": "https://gestordestreamslucio.netlify.app/facebook_api/DOG.png",
                    "width": 468,
                    "height": 625
                }
            }
        }
    }
    return gapi.client.youtube.liveBroadcasts.update(updateReq)
        .then(function(response) {
            console.log('Respuesta: ', response);
            updateResponse = response;
        },
        function(err) { console.error("Error", err); })
}