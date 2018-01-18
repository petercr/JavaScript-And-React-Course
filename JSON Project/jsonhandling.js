var followers = null;
var searchData = null;

document.getElementById("button").addEventListener("click", function(r) {
    getUser(document.getElementById("GitUser").value);

})

function getUser(user) {


    fetch('https://api.github.com/users/' + user)
        .then(function(r) {
            return r.json();
        })
        .then(function(j) {
            console.dir(j);

            appendToBody(j);
            getFollowers(j.followers_url);


        }) // end of the first GitHub fetch request
} // end of getUser

function appendToBody(data) {
    document.getElementById("loader").style = "display: none";
    var newStuff = document.getElementById('username');
    document.getElementById("image").src = data.avatar_url;
    newStuff.innerHTML += "Real Name: " + data.name + "</br>";
    newStuff.innerHTML += "Location: " + data.location + "</br>";
    newStuff.innerHTML += "Bio: " + data.bio + "</br>";
    newStuff.innerHTML += "Number of followers: " + data.followers + "</br>";
}


function getFollowers(url) {


    fetch(url)
        .then(function(x) {
            return x.json();
        })
        .then(function(y) {
            followers = y;
            listFollowers();
        })
}

function listFollowers() {
    followers.forEach(function(f) {
        var li = document.createElement('li');
        li.innerHTML = '<a href="' + f.html_url + '">' +
            '<img src="' + f.avatar_url + '" alt="' + f.login + '"/>' +
            '</a>';
        document.getElementById('followers-list').appendChild(li);
    });
}