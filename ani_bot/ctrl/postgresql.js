const {
    Pool,
    Client
} = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'ec2-13-125-250-112.ap-northeast-2.compute.amazonaws.com',
    // host: 'localhost',
    database: 'lostark_ani',
    password: 'tlavmf123!@',
    port: 5432,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});

pool.connect();

var getAllMembers = async () => {
    try {
        var result = await pool.query('select nickname, itemlevel, jobs from members order by itemlevel desc');
        // pool.end();
        return result.rows;
    } catch (err) {
        console.log({
            err: err.error
        });
        return err;
    }
}

var getMember = async (nickname) => {
    try {
        let query = {
            text: 'select nickname, itemlevel, jobs from members where nickname = $1 order by itemlevel desc',
            values: [nickname]
        }
        var result = await pool.query(query);
        // pool.end();
        return result.rows;
    } catch (err) {
        console.log({
            err: err.error
        });
        return err;
    }
}


var updateMembersInfo = async (itemlevel, nickname, jobs) => {
    try {
        var query = {
            text: 'update members set itemlevel = $1 where nickname = $2',
            values: [itemlevel, nickname]
        }
        var result = await pool.query(query);

        if (result.rowCount == 0) {
            var inserQuery = {
                text: 'insert into members (itemlevel, nickname, jobs, adminyn, guildpartyyn) values ($1, $2, $3, $4, $5)',
                values: [itemlevel, nickname, jobs, 'N', 'N']
            }
            var iResult = await pool.query(inserQuery);
            return iResult.rowCount;
        }
        return result.rowCount;
    } catch (err) {
        console.log({
            err: err.error
        });
        return err;
    }
}


var updateNickname = async (from, to) => {
    try {
        var query = {
            text: 'update members set nickname = $1 where nickname = $2',
            values: [from, to]
        }
        var result = await pool.query(query);

        return result.rowCount;
    } catch (err) {
        console.log({
            err: err.error
        });
        return err;
    }
}

var insertCalendar = async (dayoftheweek, times, contents) => {
    try {
        var query = {
            text: 'INSERT INTO lostarkcalendar (dayoftheweek, times, contents) VALUES($1, $2, $3);',
            values: [dayoftheweek, times, contents]
        }
        var result = await pool.query(query);
        console.log(result);
        return result.rowCount;
    } catch (err) {
        console.log({
            err: err.error
        });
        return err;
    }
}



module.exports = {
    getAllMembers: getAllMembers, // 전체 길드원 가져오기
    updateMembersInfo: updateMembersInfo, // 길드원 정보 업데이트
    getMember: getMember, // 길드원 정보가져오기
    updateNickname: updateNickname, // 닉변
    insertCalendar: insertCalendar, // 일정추가
}