import { randomizeBorderRadius } from "/data/utils.js"

let postsArray = []
const fetchUrl = 'https://apis.scrimba.com/jsonplaceholder/'
const postsEndPoint = 'posts'
const postsContainer = document.getElementById('postscontainer')

//initial fetch
fetch(fetchUrl + postsEndPoint)
    .then(response => response.json())
    .then(data => {
        postsArray = data.slice(0,10)
        renderPosts(postsArray)
})

//submit new post
document.addEventListener('submit', e => {
    e.preventDefault();
    const post = {
        title: e.target[0].value,
        body: e.target[1].value
    }
    const fetchOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(post)
        }

    fetch(fetchUrl + postsEndPoint, fetchOptions)
    .then(response => response.json())
    .then(data => {
        postsArray.unshift(data)
        renderPosts(postsArray)
    })
    document.getElementById("new-post-form").reset();
})

function buildPostsHtml(postArr) {
    let postHtml = ''
    for (let post of postArr) {
        postHtml += `
        <div class="post">
            <h3>${post.title}</h3>
            <div class="post-body">
                <p>${post.body}</p>
            </div>
        </div> 
        `
    }
    return postHtml
}

function renderPosts(postsArray) {
    postsContainer.innerHTML = buildPostsHtml(postsArray)
    randomizeBorderRadius()
}