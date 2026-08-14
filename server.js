const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static("frontend"));


var users = [
    {
        "id" : 1,
        "name" : "Iris",
        "gender" : "Female",
        "image" : "https://randomuser.me/api/portraits/women/64.jpg"
    },
    {
        "id": 2,
        "name": "Lori",
        "gender": "Female",
        "image": "https://randomuser.me/api/portraits/women/42.jpg"
    },
    {
        "id":3,
        "name":"Fausto",
        "gender":"Male",
        "image": "https://randomuser.me/api/portraits/men/25.jpg"
    },

    {
        "id":4,
        "name":"Emmi",
        "gender":"female",
        "image": "https://randomuser.me/api/portraits/women/61.jpg"
    },

    {
        "id":5,
        "name":"Nooa",
        "gender":"male",
        "image":"https://randomuser.me/api/portraits/men/43.jpg"
    },

    {
        "id":6,
        "name":"Jocelyne",
        "gender":"Female",
        "image":"https://randomuser.me/api/portraits/women/24.jpg"
    },
    {
        "id":7,
        "name":"Gijsberta",
        "gender":"Female",
        "image": "https://randomuser.me/api/portraits/women/0.jpg"
    },
    {
        "id":8,
        "name":"Rodoljub",
        "gender":"male",
        "image":"https://randomuser.me/api/portraits/men/59.jpg"
    },
    {
        "id":9,
        "name": "Lewis",
        "gender":"male",
        "image":"https://randomuser.me/api/portraits/men/12.jpg"
    },
    {
        "id":10,
        "name": "Juan Manuel",
        "gender":"male",
        "image":"https://randomuser.me/api/portraits/men/94.jpg"
    }
]


function findIndex(id){
    for(var i=0;i<users.length;i++){
        if(id===users[i].id){
            return i;
        }
    }
    return -1;
}



app.get("/api/users", function(req, res){
    return res.json(users);
})


app.get("/api/users/:id", function(req, res){
    var id = Number(req.params.id);
    var index = findIndex(id);

    if(index===-1){
        res.status(404).json({"message":"User not found with id: "+id});
    }

    var user = users[index];
    return res.json(user);
});


app.get("/api/random-user",function(req,res){

    if(users.length===0){
        res.status(404).json({"message":"No users found"});
    }
    var randomIndex = Math.floor(Math.random()*users.length);
    return res.json(users[randomIndex]);

})


app.listen(port, function(){
    console.log("Server running on http://localhost:" + port);
});

