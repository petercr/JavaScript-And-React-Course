// add event listen for the button and assign the text box value to a variable
document.querySelector(".btn").addEventListener("click", function() {
    let search = document.getElementById("searchText").value;
    getSearchData(search);
})

// add event listener for the return key to get search value and search
document.getElementById("searchText").addEventListener("keydown", function (e) {
    if (13 == e.keyCode) {
        let search = document.getElementById("searchText").value;
        getSearchData(search);
    }
})

function getSearchData(searchString) {
    fetch("https://images-api.nasa.gov/search?q=" + searchString + "&media_type=image")
        .then(req => {
            return req.json();
        })
        .then(res => {
            console.dir(res);

            let url = res.collection.items[2].links["0"].href; // get the url of the image
            let description = res.collection.items[1].data["0"].description; // get the description of the image
            console.log(url + "\n" + description);


            // for loop to create 10 new image cards and append to #searchResults

            // just create a template literal and add it to .innerHTML of the div
            for (var i = 1; i < 13; i++) {
                let { href } = res.collection.items[i].links["0"];
                let { description_508 } = res.collection.items[i].data["0"];
                console.log(href + ' ' + description_508);


                let pictureBio = document.createElement("p");
                pictureBio.classList.add("bio");
                pictureBio.innerHTML = `A picture of: ${description_508}`;


                let nasaImages = document.createElement("img");
                nasaImages.src = res.collection.items[i].links["0"].href;


                document.getElementById("searchResults").appendChild(pictureBio);
                document.getElementById("searchResults").appendChild(nasaImages);
            }





        })
} // end of getSearchData
