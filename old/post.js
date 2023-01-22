//import { createRequire } from 'module';
//const require = createRequire(import.meta.url);
//const Profanity = require('profanity-js');
//const profanity = new Profanity();

function addMessage() {
    
    var textBox = document.getElementById("message")
    var text = textBox.value;
    textBox.value = "";

    var warningElement = document.getElementById("warning");
    if (warningElement) {
        warningElement.remove()
    }
    
    function hasProfanity(string) {
        var bannedWords = ["BU", "Boston University", "shower"];
        for (let word of bannedWords) {
            console.log(word);
            if (string.includes(word)) {
                return true;
            }
        }
        return false
    }
    if (hasProfanity(text)) {//(profanity.isProfane(text)) {

        var warning_html = `
        <div>
            <p id="warning">
                Messages with inappropriate language cannot be posted!
            </p>
        </div>
        `
        textBox.insertAdjacentHTML("beforebegin", warning_html)
    } else if (text.trim() && text.length <= 128) {
        posts = JSON.parse(sessionStorage.getItem('posts'))
        new_post = {
            message: text,
            date: Date.now(),
            likes: 0,
            id: posts.length
        }
        posts.push(new_post)
        sessionStorage.setItem('posts', JSON.stringify(posts))
    } else {
        var warning_html = `
        <div>
            <p id="warning">
                Your messsage must be non-empty and at most 128 characters!
            </p>
        </div>
        `
        textBox.insertAdjacentHTML("beforebegin", warning_html)
    }
}
