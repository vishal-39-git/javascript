let colourbtn = document.querySelector("#colour");
let currcolour = "white";
let body = document.querySelector("body");

colourbtn.addEventListener("click",()=>{
    if(currcolour === "white")
    {
        currcolour = "black";
        body.classList.add("black");
        body.classList.remove("white");
    }
    else
    {
        currcolour = "white";
        body.classList.add("white");
        body.classList.remove("black");
    }
    console.log(currcolour);
});