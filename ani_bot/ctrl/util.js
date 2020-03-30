const config = require('../../config')
const random = require('random-number');


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

exports.randomNum = (min, max) => {
    var randomOptions = {
        min: min,
        max: max,
        integer: true
    }

    return random(randomOptions);

    // return Math.floor(Math.random() * ((max + 1) - min)) + 1;
}

exports.cristalToGold = (gold) => {
    return (gold / 95).toFixed(2);
}

exports.mistickConverter = (num) => {
    switch (num) {
        case 1:
            return '불1';
        case 2:
            return '불2';
        case 3:
            return '불3';
        case 4:
            return '불4';
        case 5:
            return '얼음1';
        case 6:
            return '얼음2';
        case 7:
            return '얼음3';
        case 8:
            return '얼음4';

    }
}

exports.daysOfTheWeek = (dayoftheweek) => {
    switch (dayoftheweek) {
        case '월':
            return 'MON';
        case '화':
            return 'TUE';
        case '수':
            return 'WEN';
        case '목':
            return 'THU';
        case '금':
            return 'FRI';
        case '토':
            return 'SAT';
        case '일':
            return 'SUN';
        default:
            'err';
    }
}

exports.today = () => {
    var week = new Array('SUN', 'MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT');
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    var dayName = week[today.getDay()];
    return {year:year, month:month, day:day, dayName:dayName}

}