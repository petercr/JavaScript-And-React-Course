let followersURL, followersData;

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
        followersURL = j.followers_url;
        console.log(followersURL);


    }) // end of the first GitHub fetch request

    fetch("https://api.github.com/users/petercr/followers")
      .then( function(r) {
        return r.json;
      })
      .then( function(r) {
        console.log(r);
      })
