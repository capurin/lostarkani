var rp = require('request-promise-native');

var headers = {
    'Content-Type': 'application/json',
    'x-api-key': 'x2pjbp1fEj4l5v8sd3Qo1+h5W+JIGE2Lrc7JpzEb'
};

// 심심이API호출
let simsimAPI = async function (param) {
    var result = await rp.post(option(param));
    console.log(param);
    return result;
}


let option = (body) => {

    var data = {
        utext : body,
        lang : "ko"
    }

    return {
        url: 'https://wsapi.simsimi.com/190410/talk',
    headers: headers,
        json: true,
        body: data,
    }
}

module.exports = {
    simsimAPI: simsimAPI, // (마이창고 X CJ) 주소정제 호출  
};