import React, { useEffect, useState } from 'react'
import './style.css';

function App() {
    const [backendData, setBackendData] = useState([{}])
    useEffect(() => {
        fetch("/api").then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
            }
        )
    }, [])

    let handleSubmit = (event) => {
        event.preventDefault();
        submitPost(event.target[0].value)
        fetch("/api").then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
            })
    }

    let handleLike = (event, i) => {
        event.preventDefault();
        likePost(i)
        fetch("/api").then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
            })
    }
    return (
        <div>
            <meta charSet="utf-8"/>
            <meta name="author" content="Oliver Toh"/>
            <title>C4C Message Board</title>
            <link href="https://fonts.googleapis.com/css2?family=Inconsolata&family=Open+Sans:wght@300&family=The+Nautigal&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>

            <header>
            <h1>Welcome!</h1>
            </header>
            <main>
            <form onSubmit={handleSubmit}>
                <input type="text" className="message" placeholder="Write something!"/>
                <button type="submit" id="submitButton" className="message">Post</button>
            </form>
            
                <ol>
                    {(backendData.posts != null || typeof backendData.posts !== 'undefined') ? (
                        backendData.posts.map((post, i) => (
                            <div key={i} className="commentBox">
                                <button id="likeButton" onClick={(e) => handleLike(e, i)}>
                                {post.likes}
                                </button>
                                <p className="message">
                                    {post.message}
                                </p>
                                <p className="timestamp"> 
                                    {new Date(post.date).toLocaleString()}
                                </p>
                            </div>
                        )).reverse()
                    ) : ( <p>Loading Posts...</p>)}
                </ol>
                
            </main>
        </div>
    );
}


function submitPost(text) {
    
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
    if ((!hasProfanity(text)) && (text.trim() && text.length <= 128)) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"msg":text})
        };
        fetch('/post', requestOptions)
    }
}

function likePost(postId) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };
    fetch("/like/"+postId, requestOptions)
}

export default App;



