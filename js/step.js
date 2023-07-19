const firstStep = document.querySelector('.partnership-programs-step__img-container:first-child');
const progressBar = document.querySelectorAll('.partnership-programs-step__progress svg circle');
const stepCounters =document.querySelectorAll('.step-counter');


window.addEventListener('scroll',stepCounter)

function hasReached (el) {
    const topPosition = el.getBoundingClientRect().top

    if(window.innerHeight >= topPosition + el.offsetHeight) {
         return true
    } else {
        return false
    }
}

function stepCounter () {
   if(!hasReached(firstStep)) return 
 
    stepCounters.forEach( (counter ,i)=> {
        let target = +counter.dataset.target

        if(window.innerWidth >= 575) {
            let strokeValue = 271 - 271 * (target / 100);
            progressBar[i].style.setProperty("--target", strokeValue)
        } else {
            let strokeValue = 428 - 428 * (target / 100);
            progressBar[i].style.setProperty("--target", strokeValue)
        }
         
    } )
    progressBar.forEach((el )=> (el.style.animation = "progress 2s ease-in-out forwards"))
}


 