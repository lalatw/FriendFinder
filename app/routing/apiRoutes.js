var friendData = require("../data/friends");

module.exports=function(app) {

    //GET route with the url /api/friends that will display JSON of all possible friends.
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    })

    //POST routes /api/friends that will handle incoming survey results and do the the compatibility. 
    app.post("/api/friends", function(req, res) {
        if (friendData.)







    })


};