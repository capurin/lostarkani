var ctrl = require('./ctrl/ctrl')

module.exports = async function (app) {
    app.get('/', ctrl.getNotice);
    
    app.get('/login', function (req, res) {
        res.send('<h1>please login</h1>');
    });

    app.get('/schedule', function (req, res) {
        res.render('schedule');
    });

    app.get('/blog', function (req, res) {
        res.render('blog');
    });

    app.get('/test', ctrl.test);

}