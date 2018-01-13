fetch('https://api.github.com/users/cassidoo')
  .then(function(r) {
    return r.json();
  })
  .then(function(j) {
    console.log(j);
    var newStuff = document.getElementById('username');
    document.getElementById("image").src = j.avatar_url;
  })
