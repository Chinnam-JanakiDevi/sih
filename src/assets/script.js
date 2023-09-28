// const moreInfoBtn = document.getElementById('moreInfoBtn');
// const expandedBox = document.getElementById('expandedBox');
// const overlay = document.getElementById('overlay');
// const closeBtn = document.getElementById('closeBtn');

// moreInfoBtn.addEventListener('click', () => {
//     document.getElementById("expandedBox").style.display = 'block';
//     document.getElementById("overlay.style.display = 'block';
// });

// closeBtn.addEventListener('click', () => {
//     expandedBox.style.display = 'none';
//     overlay.style.display = 'none';
// });


const likeBtn = document.getElementById('likeBtn');
const dislikeBtn = document.getElementById('dislikeBtn');
const commentBtn = document.getElementById('commentBtn');

let likes = 0;
let dislikes = 0;

// likeBtn.addEventListener('click', () => {
//     likes++;
//     updateLikesDislikes();
// });
function handlelikeClick() {
    likes++;
    updateLikesDislikes();
}
function handleDislikeClick() {
    dislikes++;
    updateLikesDislikes();
}


commentBtn.addEventListener('click', () => {
    // Add your code to handle comments here
    alert('Comment button clicked!');
});

function updateLikesDislikes() {
    document.getElementById("likeBtn").innerHTML = `<i class="fas fa-thumbs-up"></i> Like (${likes})`;
    document.getElementById("dislikeBtn").innerHTML = `<i class="fas fa-thumbs-down"></i> Dislike (${dislikes})`;
}