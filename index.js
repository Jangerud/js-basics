//alert("script has been loaded!")

//alert(getRandomNumber(1, 55));

document.getElementById("btn--graderKlick").onclick = function getClickedRandomNumber()
{
    let min = Math.ceil(1);
    let max = Math.floor(55);
    let randomNumber = getRandomNumber(min, max);
    document.getElementById("graderbox").innerHTML = `<h1>${randomNumber}</h1>`;
};



function getRandomNumber(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min) + "°";
}