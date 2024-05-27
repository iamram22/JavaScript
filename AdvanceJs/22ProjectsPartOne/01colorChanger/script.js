const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");


/* .target property is commonly used in event handling. It refers to the object that triggered the event.
When an event occurs, like a click or a keypress, it's often associated with an element in the HTML document,
like a button or a text input field. 
The target property allows you to access that specific element inside the event handler function. */

buttons.forEach(function(button){
  button.addEventListener("click", function(e){
    if(e.target.id === "grey"){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "white"){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "blue"){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "yellow"){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "purple"){
      body.style.backgroundColor = e.target.id
    }
  }); 
  document.getElementById("purple").style.backgroundColor = "purple"
});