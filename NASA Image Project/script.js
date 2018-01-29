// add event listen for the button and assign the text box value to a variable 
document.querySelector(".btn").addEventListener("click", function() {
    let search = document.getElementById("searchText").value;
    console.log(search);
})