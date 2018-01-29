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
            // for loop to create 10 new image cards and append to #searchResults
            for (let i = 0; i > 10; i++) {
                let temp = document.createElement("img");
                document.getElementById("testImg").src = res.collection.items["0"].links["0"].href;
            } //
        })
}