const navbarEl = document.querySelector(".navbar");  //returns the first Element within the document that matches the specified selector

const bottomContainerEl = document.querySelector(".bottom-container");

console.log(navbarEl.offsetHeight);

window.addEventListener("scroll", ()=>{     //when scroll happen we gona trigger a function
    if(window.scrollY > bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50){ //50 is the margin that it has on css part, navbarEl.offsetHeight and this is only the height of the navbar
        navbarEl.classList.add("active");   //When it happens we add a new class that we preconfigurated in css 
    }else{
        navbarEl.classList.remove("active"); //remove the class added before
    }   
}); 