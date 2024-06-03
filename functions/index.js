const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser"); 
const trashRoutes = require("./routes/trash-routes");
const app = express();

app.use(cors(
    {
       origin: true,
       "Access-Control-Allow-Origin": "*",
       "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
       "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    }
 ));
 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/test", (req, res) => {
logger.info("Hello logs!", {structuredData: true});
res.send("Hello from Firebase!");
});

app.use("/api/v1", trashRoutes.routes);

 exports.iot_project = onRequest(app);