export { randomIntFromInterval, randomizeBorderRadius }

//GENERATE RANDOM NUMBER BETWEEN NUMBERS//
function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomizeBorderRadius() {
    for (let post of document.getElementsByClassName('post')) {
        post.style.borderRadius = `${randomIntFromInterval(10,32)}% ${randomIntFromInterval(10,32)}% / ${randomIntFromInterval(10,40)}% ${randomIntFromInterval(10,25)}%`
    }
}