
const { v4: uuidv4 } = require('uuid');
const userRoutes = require('./users');
const helpers = require('./helpers');


const appRouter = (app, fs) => {

    //returns apikey
    app.get('/', (req, res) => {
        helpers.readFile(data => {
            const newUserId = uuidv4()

            data[newUserId] = req.body;

            helpers.writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send(data);
            });
        },
            true);
    });

    // // other routes
    app.get('/create_board', (req, res) => {

    });


    app.get('/boards', (req, res) => {

    });
    userRoutes(app, fs);

};

module.exports = appRouter;