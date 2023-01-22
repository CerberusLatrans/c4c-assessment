const express = require('express')
const app = express()

app.use(express.json());

var testPosts = [
    {
        "message": "first message",
        "date": Date.now(),
        "likes": 0,
        "id": 0,
    },
    {
        "message": "second message",
        "date": Date.now(),
        "likes": 0,
        "id": 1,
    },
];

var allPosts = []

app.get("/api", (req, res) => {
    res.json({
        "posts": allPosts
    })
})

app.post("/post", (req, res) => {
    var text = req.body.msg
    var newPost = {
        "message": text,
        "date": Date.now(),
        "likes": 0,
        "id": allPosts.length
    }
    allPosts.push(newPost)
    res.sendStatus(201);
})

app.post("/like/:id", (req, res) => {
    let postId = req.params.id
    post = allPosts[postId]
    allPosts[postId] = {
        "message": post.message,
        "date": post.date,
        "likes": post.likes + 1,
        "id": post.id,
    }
    res.sendStatus(201);
})

app.listen(5001, () => {console.log("Server started on port 5001")})