document.getElementById('left').addEventListener('click', function(){
    var position = document.getElementById('ball').style.left;
    var newPostion = parseInt(position) - 10;

    document.getElementById('ball').style.left = newPostion + 'px';
});
document.getElementById('Right').addEventListener('click', function(){
    var position = document.getElementById('ball').style.left;
    var newPostion = parseInt(position) + 10;

    document.getElementById('ball').style.left = newPostion + 'px';
});

document.getElementById('Up').addEventListener('click', function(){
    var position = document.getElementById('ball').style.top;
    var newPostion = parseInt(position) - 10;

    document.getElementById('ball').style.top = newPostion + 'px';
});
document.getElementById('Down').addEventListener('click', function(){
    var position = document.getElementById('ball').style.top;
    var newPostion = parseInt(position) + 10;

    document.getElementById('ball').style.top = newPostion + 'px';
});