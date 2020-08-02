
const { v4: uuidv4 } = require('uuid');
const userRoutes = require('./users');
const helpers = require('./helpers');
const boardHelpers = require('./helpersBoards')
const boardRoutes = require('./boards');


const appRouter = (app, fs) => {

    //returns apikey
    app.get('/', (req, res) => {
        helpers.readFile(data => {
            const newUserId = uuidv4()
            data[newUserId] = []
            helpers.writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send({ "apikey": newUserId });
            });
            boardHelpers.readFile(data => {
                data[newUserId] = []
                boardHelpers.writeFile(JSON.stringify(data, null, 2), () => { })
            })
        },
            true);
    });

    userRoutes(app, fs);
    boardRoutes(app, fs)

};

module.exports = appRouter;