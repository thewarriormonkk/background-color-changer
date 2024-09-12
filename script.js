// generating random color

const randomColor = () => {
    const hex = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * 16);
        color += hex[randomIndex];
    }
    return color;
}



let intervalId;

function startChangingColor() {
    if (!intervalId) {
        intervalId = setInterval(() => {
            document.body.style.backgroundColor = randomColor();
        }, 1000);
    }

}

function stopChangingColor() {
    clearInterval(intervalId);
    intervalId = null;
}

// start
document.querySelector(".start").addEventListener("click", startChangingColor);

// stop
document.querySelector(".stop").addEventListener("click", stopChangingColor);