// Original XML request for project
// const ajaxRequest = new XMLHttpRequest();
// ajaxRequest.addEventListener('readystatechange', function(r) {
//   if(r.target.status === 200) {
//     console.log(r.target.response);
//   }
// });
// ajaxRequest.open("GET", "https://api.github.com/users/petercr", true);
// ajaxRequest.send();

fetch("https://api.github.com/users/petercr")
  .then(function (req){
    console.log(req.status);
    return req.json();
  })
  .then(function (data){
    console.log(data);
  })
