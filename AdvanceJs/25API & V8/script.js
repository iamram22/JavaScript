const url = 'https://api.chucknorris.io/jokes/random';

const btn = document.getElementById("getJoke")

let joke = document.getElementById("display-joke")

btn.addEventListener("click", () => {
  fetch(url)
  .then(res => {
    return res.json()
  })
  .then(data => {
    joke.innerHTML = data.value
  })
})
