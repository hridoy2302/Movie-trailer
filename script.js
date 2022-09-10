const btnElement =document.querySelector(".btn");

const closeIconEl = document.getElementById("close");

const trailerContainerEl = document.querySelector(".trailer-container");
const videoEl = document.querySelector("video");

btnElement.addEventListener("click" , (mango)=>{
    trailerContainerEl.classList.remove("active");
});

closeIconEl.addEventListener("click", ()=>{
    trailerContainerEl.classList.add("active");
    videoEl.pause()
    videoEl.currentTime = 0;
});


closeIconEl.addEventListener("click" , ()=>{
    closeIconEl.close()
})