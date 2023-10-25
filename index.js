const DOMSelectors = {
    button: document.getElementById("btn"),
    text: document.querySelector("#text"),
    box: document.getElementById("big-black-box"),
    point: document.querySelector(".point"),

};
function backgroundAndText(background, text){
    background.style.backgroundColor = "red";
    text.innerHTML = "This is now a big red box";
    text.style.fontSize = "40px";
}
console.log(DOMSelectors.point);

backgroundAndText(DOMSelectors.box, DOMSelectors.text);
DOMSelectors.button.addEventListener("click", function(){
    backgroundAndText(DOMSelectors.box, DOMSelectors.text)
});

function changeLi(){
    let pointIndex = 1;
    DOMSelectors.points.forEach((point) => {
point.addEventListener("click", function (){
    point.textContent = 'Hello I am point ${pointIndex}';
    pointIndex++;
});

    });
}
changeLi();