const form = document.querySelector("form")
const btn = document.querySelector("button")
// let 


btn.addEventListener("click", (e) => {

    e.preventDefault();

    let height = parseInt(document.getElementById("height").value)
    let weight = parseInt(document.getElementById("weight").value)
    let results = document.getElementById("results")

    if (height === "" || height < 10 || isNaN(height)){
        results.innerHTML = "Pls provide a valid height"
    } else if (weight === "" || weight < 10 || isNaN(weight)) {
        results.innerHTML = "Pls provide a valid weight"
    } else BMI = (weight/ ((height * height)/10000)).toFixed(2)
        results.innerHTML = BMI

})


