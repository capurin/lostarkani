const config = require('../config')

var GoogleAuth; // Google Auth object.
function initClient() {
  gapi.client.init({
      'apiKey': config.keys.apiKey,
      'clientId': config.keys.clientId,
      'scope': 'https://www.googleapis.com/auth/drive.metadata.readonly',
      'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest']
  }).then(function () {
      GoogleAuth = gapi.auth2.getAuthInstance();

      // Listen for sign-in state changes.
      GoogleAuth.isSignedIn.listen(updateSigninStatus);
  });
}