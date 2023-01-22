# c4c-assessment

OVERVIEW:
server/server.js contains the backend functionality using Express JS
client/src/style.css contains simple styling for the site
client/src/App.js contains the client-side functionality and HTML rendering using React JS
ignore the "old" folder-- I initially made this completely in frontend before realizing that I was missing any server-side functionality, so had to learn some full stack


HOW IT FUNCTIONS AND FULFILLS REQUIREMENTS:
Upon starting up, the server stores an empty array of posts in memory to be populated by users. Posts are objects with a message, date of posting, like counter, and unique id (also the index in the list).
The client application (React) fetches any existing posts from the server with a GET request (/api) and stores it in backendData with a useState hook.
The HTML rendered will have a simple form element for text input and submission, with an ordered list of posts (to be) rendered underneath.

Inside the ordered list element: if able to get the posts in backendData, it will map across all posts to create a div with a like button, post message, and timestamp. This list is then reversed so that the most recent posts appear at the top when rendered.

Whenever a client enters text and submits it, the text gets passed to the handleSubmit handler which passes it to the submitPost helper, and finally fetches the server data again to update the state and automatically rerender the page. The submitPost helper checks that the text contains no profanity (from a locally stored list of bad words), isn't just whitespace, and is no more than 128 characters. If it passes these checks (otherwise nothing happens), then a POST request (/post) is sent to the server containing the text. Upon receiving this request, the server creates a new object with the given message, current date, 0 likes, and the appropriate index (length of the existing list). When the page is rerendered, this new post object will be displayed at the top.

Whenver a client hits the like button on a post, the index (id) of the post gets passed to the handleLike handler which passes the id to the likePost helper, and again fetches the newest state to rerender the page. The likePost helper sends a POST request (/like/{id}) to the server which, upon receiving this request, gets the existing post object by index (id). A new post object is created with an incremented like counter (but everythging else the same), and replaces the orginal post object in the list. When the page is rerendered, the post will have another like.

Since all clients are able to post and fetch data to and from the server which then stores this data in memory, all clients across different computers will get so see the same board upon reloading the page.

BONUS FEATURES:
You will not be able to post messages containing "profanity"-- profanity as of now is one of "BU", "Boston University", or "shower", however the list of blacklisted words can be added easily in the local array.

Upvote button/tracker for each post: by clicking on the number of likes, you can add a like. I implemented this by giving each post object an id and likes property. The id (index in the posts array) is used to locate the post, create a new post object with one extra like, and replace it in the array.

Not implemented, but in order to make sure the data survives a server restart, I would create a SQLite database using Express. Everytime the server is started it would first request all the existing posts with a SELECT * query. Whenever the data is modified (post added or post liked), it would make a request to the database to add a row (representing one post with its attributes in separate columns) using an INSERT query.

HOW TO START THE APPLICATION :
in the server folder, do "npm run dev" to start up the server locally on port 5001
in the client folder, do "npm start" to start the client-side site locally on port 3000
