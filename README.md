# c4c-assessment

OVERVIEW:
The index.html file contains all of the code for the layout (message input, post button, post list)
The style.css file contains some typical dark themed styling for the html.
The testData.js file was used to load test posts in session storage before the posting feature was implemented. It now just instantiates the post list as an empty list in session storage.
The render.js file just renders each post in session storage sequentially by adding html inside the ordered list.
The post.js file contains the logic to add a post to the board after a client writes something and clicks the post button

HOW IT FUNCTIONS AND FULFILLS REQUIREMENTS:
The html has a text input element and button element to post the text.
Upon loading the site, the render method will run which should render an empty list of posts (nothing).
Typing text and pressing the button will trigger the addMessage method which will:
a) clear the text field and any previous warnings
b) check if that text is not just whitespace or is not exceeding 128 characters (if it does, then a warning message using html is created and the below steps are skipped)
c) gets the existing posts from session storage, creates a new post object with the given text and the current Date/Time, and saves it in session storage
Finally, the button triggers a the render method which re-renders each post sequentially (next earliest post is rendered higher on the page than the previous ones) using html elements with the corresponding post data.
Since the post objects are stored in session storage (server side), new posts will update on other client's views upon refresh or them posting

BONUS FEATURES:
The addMessage method will not allow posts containing "profanity" and will show a warning if they do. Profanity as of now is one of "BU", "Boston University", or "shower", however the list of blacklisted words can be added easily in the local array.

Upvote button/tracker for each post: by clicking on the number of likes, you can add a like. I implemented this by giving each post object an id and likes property. The id (index in the posts array) is used to locate the post, create a new post object with one extra like, replace it in the array, and set the posts array in session storage again (then render page again).

HOW TO START THE APPLICATION (at least how I did it):
load this file in VSCode and install Live Server (https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
click Go Live (a tab should open in your browser on a local port and the site should be running)

Note: used browserify to import the fs module (for reading and writing locally), so might have to put "npm i browserify -g"
in the terminal