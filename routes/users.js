const helpers = require('./helpers')
const fs = require("fs");

const userRoutes = (app) => {

    // GET
    app.get('/users', (req, res) => {
        helpers.readFile((data) => {
            res.send(data);
        });
    });

    //POST
    app.post('/users', (req, res) => {

        let { apikey, name } = req.body

        helpers.readFile(data => {
            if (apikey === undefined || name === undefined) {
                res.status(400).send('learn to send api req')
            } else {
                let regApiKey = Object.keys(data)
                let match = regApiKey.indexOf(apikey)
                if (match === -1) {
                    res.status(401).send('invalid apikey')
                } else if (name === "") {
                    res.status(400).send('invalid name')
                } else {
                    data[apikey] = [...data[apikey], name]
                    helpers.writeFile(JSON.stringify(data, null, 2), () => {
                        res.status(200).send("user registrated" + ':' + ' ' + `${name}`);
                    });
                }
            }

        },
            true);
    });


    // DELETE
    app.delete('/users/:id', (req, res) => {

        helpers.readFile(data => {

            // add the new user
            const userId = req.params["id"];
            delete data[userId];

            helpers.writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send(`users id:${userId} removed`);
            });
        },
            true);
    });
};

module.exports = userRoutes;