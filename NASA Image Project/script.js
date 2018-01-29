// add event listen for the button and assign the text box value to a variable 
document.querySelector(".btn").addEventListener("click", function() {
    let search = document.getElementById("searchText").value;
    getSearchData(search);
})

function getSearchData(searchString) {
    fetch("https://images-api.nasa.gov/search?q=moon")
        .then(req => {
            return req.json();
        })
        .then(res => {
            console.dir(res);
        })
}