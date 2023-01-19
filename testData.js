// used for initial testing
var testPosts = [
    {
        message: "first message",
        date: Date.now(),
        likes: 0,
        id: 0,
    },
    {
        message: "second message",
        date: Date.now(),
        likes: 0,
        id: 1,
    },
];

const fs = require("fs");
let contents = JSON.parse(fs.readFileSync("posts.txt").toString());
var posts = []
if (!contents) {
    posts = contents
}
if (sessionStorage && sessionStorage.getItem('posts')) {
    posts = JSON.parse(sessionStorage.getItem('posts'))
} else {
    threads = testPosts;
    sessionStorage.setItem('posts', JSON.stringify(testPosts))
}
