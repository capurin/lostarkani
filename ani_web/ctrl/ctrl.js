var db = require('./postgresql');
var util = require('../../ani_bot/ctrl/util');
var auth = require('../../ani_bot/functions/Auth');
const GoogleSpreadsheet = require('google-spreadsheet');

var getNotice = async (req, res) => {

    const data = await db.getNotice();
    const date = await db.getTodayCalander(util.today().dayName);
    // console.log(await auth.query());
    console.log(data);
    res.render('index', {
        data: data,
        date: date
    });
}

var test = async (req, res) => {
    const creds = require('../../discord-ani-bot-c002c7c6d5eb.json');
    const doc = new GoogleSpreadsheet('18x_1Ruffaiq9201hTdQ_3sp3ihZ8M4Nx2EoqokHfsKs');

    //, "limit": 100 // 한번에 읽을 최대 행의 갯수 ( 최상위 1번 열은 포함하지 않는다. )}
    var data = await doc.useServiceAccountAuth(creds, async function (err) {
        await doc.getRows(1, {"offset": 1 , "limit": 2 }, async function (err, rows) {
                // return rows;
                // for (var num = 0; rows.length > num; num++) {
                //   console.log(rows[num].활동명 + " / " + rows[num].별명);
                // }
                console.log(JSON.stringify(rows));
                return await rows;
            }

        );
    });
    //  await auth.query();
    console.log(JSON.stringify(data));
    res.send(JSON.stringify(data));
}


module.exports = {
    getNotice: getNotice, // 공지사항가져오기
    test: test, // 구글시트 테스트
}