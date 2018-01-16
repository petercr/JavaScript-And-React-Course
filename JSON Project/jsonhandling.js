var followers, searchData;

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
            var newStuff = document.getElementById('username');
            document.getElementById("image").src = j.avatar_url;
            newStuff.innerHTML += "Real Name: " + j.name + "</br>";
            newStuff.innerHTML += "Location: " + j.location + "</br>";
            newStuff.innerHTML += "Bio: " + j.bio + "</br>";
            newStuff.innerHTML += "Number of followers: " + j.followers + "</br>";
            followers = j;
            console.log(followers);


        }) // end of the first GitHub fetch request



    fetch(`https://api.github.com/users/${user}/followers`)
        .then(function(x) {
            return x.json;
        })
        .then(function(y) {
            console.log(y);
        })

} // end of getUser
