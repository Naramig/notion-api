const express = require('express')
const dotenv = require('dotenv');

const {ENV} = require("./helpers/state")
const db = require("./storages/db");

const app = express()
app.use(express.json());
dotenv.config();

function checkEnv() {
    for (const data of ENV) {
        if (data in process.env) {
        } else {
            throw new Error(`${data} env IS NOT SET`)
        }
    }
}

exports.init = async function () {
    return new Promise((resolve, reject) => {
        try {

            checkEnv()
            db.sequelize.sync();

            app.get('/ping', (req, res) => {
                res.send('pong')
            })

            require("./routes/notions.routes")(app);


            app.listen(process.env.PORT, () => {
                console.log(`User app listening on port ${process.env.PORT}`)
            })
            resolve();
        } catch (err) {
            console.log("Initialization error", err);
            reject(err);
        }
    });
};