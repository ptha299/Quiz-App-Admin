const express = require("express");
const path = require("path");
const app = express();
const handlebars = require("express-handlebars");
const hbs = handlebars.create({ 
    extname: ".hbs",
    helpers: {
        sum: (a, b) => a+b,
    }
});
const port = 3001;

const route = require("./app/controllers/ROUTES");
const db = require("./config/db");

//connect database
db.connect();

app.use(express.static(path.join(__dirname, "public")));
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

//template engine
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

//routes init
route (app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
