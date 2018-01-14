fetch('https://api.github.com/users/petercr')
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
        console.log(j.followers_url);

    })