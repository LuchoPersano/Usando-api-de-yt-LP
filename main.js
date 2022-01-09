console.log("Este es Lucio intentando aplicar la API de youtube para livestreams :D");

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
    return gapi.client.youtube.liveBroadcasts.insert({
      "part": [
        "snippet,contentDetails,status"
      ],
      "resource": {
        "snippet": {
          "title": "Test broadcast"/*,
          "scheduledStartTime": "YOUR_SCHEDULED_START_TIME",
          "scheduledEndTime": "YOUR_SCHEDULED_END_TIME"*/
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