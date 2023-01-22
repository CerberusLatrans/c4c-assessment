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
let contents = JSON.parse(fs.readFile("posts.txt").toString());
if (!contents) {
    contents = []
}
sessionStorage.setItem('posts', JSON.stringify(contents))
//if (sessionStorage && sessionStorage.getItem('posts')) {
//    posts = JSON.parse(sessionStorage.getItem('posts'))
//} else {
//    threads = testPosts;
//    sessionStorage.setItem('posts', JSON.stringify(testPosts))
//}

//https://www.youtube.com/watch?v=6BozpmSjk-Y&ab_channel=dcode