console.log("Este es Lucio intentando aplicar la API de youtube para livestreams :D");
//holaaa
console.log("JS v1.0.0.1 running");


    /**
   * Sample JavaScript code for youtube.liveBroadcasts.insert
   * See instructions for running APIs Explorer code samples locally:
   * https://developers.google.com/explorer-help/guides/code_samples#javascript
   */
//Este no funca:
/*
     function authenticate() {
        return gapi.auth2.getAuthInstance()
            .signIn({scope: "https://www.googleapis.com/auth/youtube"})
            .then(function() { console.log("Sign-in successful"); },
                  function(err) { console.error("Error signing in", err); });
      }
      function loadClient() {
        return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
            .then(function() { console.log("GAPI client loaded for API"); },
                  function(err) { console.error("Error loading GAPI client for API", err); });
      }
      // Make sure the client is loaded and sign-in is complete before calling this method.
      function execute() {
        return gapi.client.youtube.liveBroadcasts.insert({
          "part": [
            "snippet,contentDetails,status"
          ],
          "resource": {
            "snippet": {
              "title": "Test broadcast",
              "scheduledStartTime": "2022-09-01T17:15:00",
              "scheduledEndTime": "2022-09-01T17:30:00"
            },
            "contentDetails": {
              "enableClosedCaptions": true,
              "enableContentEncryption": true,
              "enableDvr": true,
              "enableEmbed": true,
              "recordFromStart": true,
              "startWithSlate": true
            },
            "status": {
              "privacyStatus": "unlisted"
            }
          }
        })
            .then(function(response) {
                    // Handle the results here (response.result has the parsed body).
                    console.log("Response", response);
                  },
                  function(err) { console.error("Execute error", err); });
      }
      gapi.load("client:auth2", function() {
        gapi.auth2.init({client_id: "38164434341-tiliciovo1hrej80rr815k4bq59fi09g.apps.googleusercontent.com"});
      });
      */

      /**
   * Sample JavaScript code for youtube.liveBroadcasts.insert
   * See instructions for running APIs Explorer code samples locally:
   * https://developers.google.com/explorer-help/guides/code_samples#javascript
   */

function loadClient() {
  gapi.client.setApiKey("38164434341-tiliciovo1hrej80rr815k4bq59fi09g.apps.googleusercontent.com");
  return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
      .then(function() { console.log("GAPI client loaded for API"); },
            function(err) { console.error("Error loading GAPI client for API", err); });
}
// Make sure the client is loaded before calling this method.
function execute() {
    var title = "Transmisión de prueba";
  return gapi.client.youtube.liveBroadcasts.insert({
    "part": [
      "snippet,contentDetails,status"
    ],
    "resource": {
      "snippet": {
        "title": title,
        "scheduledStartTime": "2022-01-10T19:00:00",
        "scheduledEndTime": "2022-09-10T19:30:00"
      },
      "contentDetails": {
        "enableClosedCaptions": true,
        "enableContentEncryption": true,
        "enableDvr": true,
        "enableEmbed": true,
        "recordFromStart": true,
        "startWithSlate": true
      },
      "status": {
        "privacyStatus": "unlisted"
      }
    }
  })
      .then(function(response) {
              // Handle the results here (response.result has the parsed body).
              console.log("Response", response);
            },
            function(err) { console.error("Execute error", err); });
}
gapi.load("client");