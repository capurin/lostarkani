const {
    Pool,
    Client
} = require('pg')
const pool = new Pool({
    user: 'secret',
    host: 'secret',
    database: 'secret',
    password: 'secret',
    port: 5432,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});

pool.connect();

var getNotice = async () => {
    try {
        var result = await pool.query('select * from notice');
        // pool.end();
        return result.rows;
    } catch (err) {
        console.log({
            err: err.error
        });
        return err;
    }
}

var getTodayCalander = async (daysOfTheWeek) => {
    try {
        var query = {
            text: 'select * from lostarkcalendar where dayoftheweek in ($1, $2) order by times',
            values: [daysOfTheWeek, 'ALL']
        }
        var result = await pool.query(query);

        return result.rows;
    } catch (err) {
        console.log({
            err: err.error
        });
        return err;
    }
}


module.exports = {
    getNotice: getNotice, // 공지사항 가져오기
    getTodayCalander: getTodayCalander, // 일정가져오기
}
