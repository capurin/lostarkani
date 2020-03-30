const GoogleSpreadsheet = require('google-spreadsheet');

// Google APIs 페이지에서 생성한 서비스 계정 키의 JSON 파일을 배치한다.
const creds = require('../../discord-ani-bot-c002c7c6d5eb.json');

var query = async () => {
  // spreadsheet key is the long id in the sheets URL
  const doc = new GoogleSpreadsheet('18x_1Ruffaiq9201hTdQ_3sp3ihZ8M4Nx2EoqokHfsKs');

  doc.useServiceAccountAuth(creds, async function (err) {
   await doc.getRows(1, {
        "offset": 1 //, "limit": 100 // 한번에 읽을 최대 행의 갯수 ( 최상위 1번 열은 포함하지 않는다. )
      },
      async function (err, rows) {
        // return rows;
        // for (var num = 0; rows.length > num; num++) {
        //   console.log(rows[num].활동명 + " / " + rows[num].별명);
        // }
        console.log(rows);
        return await rows;
      }

    );
  });
}

module.exports = {
  query: query,
}