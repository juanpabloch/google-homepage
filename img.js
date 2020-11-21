const form = document.querySelector(".form-img")
const input = document.querySelector(".search-bar")

form.addEventListener("submit", function(e){
    e.preventDefault()
    location =`https://www.google.com.ar/search?tbm=isch&q=${input.value}`
})