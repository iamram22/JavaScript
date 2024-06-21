const clock = document.getElementById("clock")

function showTime(){
  let now = new Date();
  let hours = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  // let AM_PM = ""

  // if(hours >= 12) {
  //   AM_PM = "PM"
  // }

  const start = `${hours} : ${minute} : ${second.toString().padStart(2, "0")}` 

  clock.innerHTML = start;
}

showTime()
setInterval(showTime, 1000)


