let uC = document.querySelector(".uppercase")
 const lC = document.querySelector(".lowercase")
 const capt = document.querySelector(".capitalize")
 const bold = document.querySelector(".bold")
 const italic = document.querySelector(".italic")
 const uL = document.querySelector(".underline")
 const btn = document.querySelector(".btn")
 let output = document.getElementById("output-field")
 let ip = document.getElementById("input-field")

uC.addEventListener("click", function(){
  ip.style.textTransform = "uppercase"
})