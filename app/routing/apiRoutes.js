var friendData = require("../data/friends");

module.exports=function(app) {

    //GET route with the url /api/friends that will display JSON of all possible friends.
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });

    //POST routes /api/friends that will handle incoming survey results and do the the compatibility. 
    app.post("/api/friends", function(req, res) {

        console.log(req.body);
        friendData.push(req.body);
        
        var currentPerson = friendData[friendData.length-1];
        console.log("current person:"+currentPerson);

        //the temp closest match person's index
        var closestMatchPerson = 0;

        //the temp closest match person's score
        var closestScore = 50;

        for (var i=0; i<friendData.length-1; i++) {
            var scoreDiff = compare(currentPerson, friendData[i]);
            if (scoreDiff<closestScore) {
                closestScore = scoreDiff;
                closestMatchPerson = i;
            }
        }

        console.log(friendData[closestMatchPerson]);
        res.json(friendData[closestMatchPerson]);

    });

    //the function to compare the score of current person with others' score
    function compare (currentPerson, otherObj) {
        var scoreDifference = 0;
        for (var i=0; i<friendData.length; i++) {
            scoreDifference+=Math.abs(parseInt(currentPerson.scores[i])-parseInt(otherObj.scores[i]));
        }
        return scoreDifference;
    }

};


