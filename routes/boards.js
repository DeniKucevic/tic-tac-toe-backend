const helpers = require('./helpersBoards');
const boardRoutes = (app) => {


    // get aou 
    app.post('/boards', (req, res) => {
        helpers.readFile(data => {
            res.status(200).send(data);
        },
            true);
    });
};

module.exports = boardRoutes;