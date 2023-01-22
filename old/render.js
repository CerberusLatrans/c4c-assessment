
function render() {
    var board = document.querySelector('ol')
    board.innerHTML = ""
    var posts = JSON.parse(sessionStorage.getItem('posts'))
    console.log(posts)
    for (let post of posts) {
        //console.log(post.message)
        var post_html = `
        <div class="commentBox">
            <button onclick="upvote(${post.id});render()" id=likeButton>
            ${post.likes}
            </button>
            <p class="message">
                ${post.message}
            </p>
            <p class="timestamp">
                ${new Date(post.date).toLocaleString()}
            </p>
        </div>
        `
        board.insertAdjacentHTML("afterbegin", post_html)
    }
}

function upvote(postId) {
    var posts = JSON.parse(sessionStorage.getItem('posts'))
    console.log(posts)
    var post = posts[postId]
    posts[postId] = {
        message: post.message,
        date: post.date,
        likes: post.likes + 1,
        id: post.id,
    }
    
    var newPosts = JSON.stringify(posts)
    sessionStorage.setItem('posts', newPosts)
}
