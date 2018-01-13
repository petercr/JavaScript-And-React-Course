fetch('https://api.github.com/users/petercr')
  .then(function(r) {
    return r.json();
  })
  .then(function(j) {
    console.dir(j);
    var newStuff = document.getElementById('username');
    document.getElementById("image").src = j.avatar_url;
    
  })
