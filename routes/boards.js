const { v4: uuidv4 } = require('uuid');
const userRoutes = require('./users');


const appRouter = (app, fs) => {


    // get aou 
    app.get('/', (req, res) => {
        helpers.readFile(data => {
            const newUserId = uuidv4()

            // add the new user
            data[newUserId] = req.body;

            helpers.writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send(data);
            });
        },
            true);
    });

    // // other routes
    userRoutes(app, fs);

};

module.exports = appRouter;