import { randomIntFromInterval } from "/data/utils.js"

document.addEventListener('submit', e => {
    e.preventDefault();
    const post = {
        title: e.target[0].value,
        body: e.target[1].value
    }
})

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(response => response.json())
    .then(data => {
        const postArr = data.slice(0,5)
        document.getElementById('postscontainer').innerHTML = `${buildPostsHtml(postArr)}`
        for (let post of document.getElementsByClassName('post')) {
            post.style.borderRadius = `${randomIntFromInterval(10,32)}% ${randomIntFromInterval(10,32)}% / ${randomIntFromInterval(10,40)}% ${randomIntFromInterval(10,25)}%`
        }
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