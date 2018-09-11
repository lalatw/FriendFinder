var path = require("path");

module.exports = function(app) {
    //GET Route to /survey which will display the survey html page.
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });


    //The default route that leads to home.html which displays the home page.
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    });

};