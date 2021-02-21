const menuButton = document.querySelector('#menuButton');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElemnts = document.querySelectorAll(".has-fade");
const body = document.querySelector('body')

header.addEventListener('click', function()
{
    console.log("open menu");

    if (header.classList.contains("open"))
    {
        body.classList.remove("no-scroll")
        header.classList.remove("open");
        fadeElemnts.forEach(function(element){
            element.classList.remove("fade-in");
            element.classList.add("fade-out");
        });
        
    }
    else
    {
        body.classList.add("no-scroll")
        header.classList.add("open");
        fadeElemnts.forEach(function(element){
            element.classList.remove("fade-out");
            element.classList.add("fade-in");
        });
        
    }

});
