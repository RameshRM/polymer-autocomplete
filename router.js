module.exports = function(app) {
    app.get('/', require('./src/pages/index'));
    app.get('/keywords', require('./src/controller/autocomplete'));
    app.post('/keywords', require('./src/controller/autocomplete'));
};