//generating random color through HEX values

const randomColor = function(){
    const hex = "123456789ADCDEF";
    let color = "#";
    for(let i=0; i <6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    };
    return color;
};

const startChangingColor = function(){
    document.body.style.backgroundColor = randomColor();
};

let intervalID
document.getElementById("start").addEventListener("click", function(){
    intervalID = setInterval(startChangingColor, 1000)
});

const stopChangingColor = function(){
    clearInterval(intervalID)
};

document.getElementById("stop").addEventListener("click", stopChangingColor);