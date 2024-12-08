document.querySelectorAll("button").forEach(button => {
    button.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "purple";
        event.target.style.color = "white";
    });
    button.addEventListener("mouseout", (event) => {
        event.target.style.backgroundColor = "";
        event.target.style.color = "";
    });
});
