(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
console.log(contents)
sessionStorage.setItem('posts', JSON.stringify(contents))
//if (sessionStorage && sessionStorage.getItem('posts')) {
//    posts = JSON.parse(sessionStorage.getItem('posts'))
//} else {
//    threads = testPosts;
//    sessionStorage.setItem('posts', JSON.stringify(testPosts))
//}

},{"fs":2}],2:[function(require,module,exports){

},{}]},{},[1]);
