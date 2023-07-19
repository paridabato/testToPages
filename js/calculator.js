const firstStep = document.querySelector(
    ".partner-program-step__list-item-img-container:first-child"
);
const progressBar = document.querySelectorAll(
    ".partner-program-step__progress svg circle"
);
const stepCounters = document.querySelectorAll(".step-counter");
const sliderValue = document.querySelector(".range-indicator span");
const indicator = document.querySelector(".range-indicator");
const inputSlider = document.querySelector("input");
const progress = document.querySelector(".progress");
const radios = document.querySelectorAll('input[name="value"]');

function updateRangeSlider(el) {
    var val = el.value;
    var min = el.getAttribute("min");
    var max = el.getAttribute("max");
    var portion = (val - min) / (max - min);
    var iel = el.parentNode.querySelector(".range-indicator");
    iel.innerHTML = val + '<span class="range-value"></span>';
    iel.style.left = portion * (el.offsetWidth - 15) + "px";
    progress.style.width = (el.value / el.max) * 100 + "%";

    renderResult(val);

    const windowWidth = window.innerWidth

    if(windowWidth < 575) {
     iel.style.left = portion * (el.offsetWidth - 30) + "px"
    } else {
         return
    }


}

window.addEventListener("scroll", stepCounter);

function hasReached(el) {
    const topPosition = el.getBoundingClientRect().top;

    if (window.innerHeight >= topPosition + el.offsetHeight) {
        return true;
    } else {
        return false;
    }
}

function stepCounter() {
    if (!hasReached(firstStep)) return;

    stepCounters.forEach((counter, i) => {
        let target = +counter.dataset.target;

        if (window.innerWidth >= 575) {
            let strokeValue = 271 - 271 * (target / 100);
            progressBar[i].style.setProperty("--target", strokeValue);
        } else {
            let strokeValue = 428 - 428 * (target / 100);
            progressBar[i].style.setProperty("--target", strokeValue);
        }
    });
    progressBar.forEach(
        (el) => (el.style.animation = "progress 2s ease-in-out forwards")
    );
}

function getCheckedRadio() {
    document
        .querySelectorAll(".partner-program-calculator__list-item-label")
        .forEach((el) => {
            el.addEventListener("click", (e) => {
                const target = e.currentTarget;
                if (
                    target.classList.contains(
                        "partner-program-calculator__list-item-label"
                    )
                ) {
                    document
                        .querySelectorAll(".partner-program-calculator__list-item-label")
                        .forEach((el) => el.classList.remove("checked"));
                }

                if (
                    target.classList.contains(
                        "partner-program-calculator__list-item-label"
                    )
                ) {
                    target.classList.add("checked");
                }
            });
        });
}
getCheckedRadio();

function selectAccount() {
    document.querySelectorAll(".btn-button").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const targetBtn = e.target;

            if (targetBtn.classList.contains("btn-button")) {
                document
                    .querySelectorAll(".btn-button")
                    .forEach((el) => el.classList.remove("active"));
            }

            if (targetBtn.classList.contains("btn-button")) {
                targetBtn.classList.add("active");
            }
        });
    });
}

selectAccount();

function renderResult(val) {
    const btnStandard = document.querySelector(".btn-standard");
    const btnCent = document.querySelector(".btn-cent");

    if (btnCent.classList.contains("active")) {
        document
            .querySelectorAll(".partner-program-calculator__list-item-label")
            .forEach((el, i) => {
                if (el.classList.contains("checked")) {
                    const centData = +el.dataset.cent;
                    document.querySelector(".render-number").innerHTML = (val * centData).toLocaleString();
                    onHandleACtiveCheckbox(val);

                }
            });
    }

    if (btnStandard.classList.contains("active")) {
        document
            .querySelectorAll(".partner-program-calculator__list-item-label")
            .forEach((el, i) => {
                if (el.classList.contains("checked")) {
                    const standardData = +el.dataset.standard;

                    document.querySelector(".render-number").textContent = (val * standardData).toLocaleString();
                    onHandleACtiveCheckbox(val);

                }
            });
    }
}

function onHandleACtiveCheckbox(val) {
    const btnStandard = document.querySelector(".btn-standard");
    const btnCent = document.querySelector(".btn-cent");

    btnCent.addEventListener('click', () => {
        updateCentCounter()

        document
            .querySelectorAll(".partner-program-calculator__list-item-label")
            .forEach(el => {
                const centData = +el.dataset.cent

                if (el.classList.contains('checked')) {
                    document.querySelector(".render-number").textContent = (val * centData).toLocaleString();
                }
            });

    })

    btnStandard.addEventListener('click', () => {
        updateStandardCounter()

        document
            .querySelectorAll(".partner-program-calculator__list-item-label")
            .forEach(el => {
                if (el.classList.contains('checked')) {
                    const standardData = +el.dataset.standard
                    document.querySelector(".render-number").textContent = (val * standardData).toLocaleString();

                }
            });
    })

 
 
    if ( btnStandard.classList.contains('active')) {
        document
            .querySelectorAll(".partner-program-calculator__list-item-label")
            .forEach((el, i) => {
                el.addEventListener("click", () => {
                        document.querySelector(".render-number").textContent = (val * +el.dataset.standard).toLocaleString();
                    
                    
                });
            });

    }

    function updateCentCounter() {
        document
            .querySelectorAll(".partner-program-calculator__list-item-label")
            .forEach((el, i) => {
                const centData = +el.dataset.cent
                el.addEventListener("click", () => {
                    document.querySelector(".render-number").textContent = (val * centData).toLocaleString();
                });
            });
    }

    function updateStandardCounter() {
        document
            .querySelectorAll(".partner-program-calculator__list-item-label")
            .forEach((el, i) => {
                el.addEventListener("click", () => {
                    document.querySelector(".render-number").textContent = (val * +el.dataset.standard).toLocaleString();
                });
            });
    }
}

 
function renderStartNumber() {
    const inputMin = document.querySelector('.range-input').value
    const btnStandard = document.querySelector(".btn-standard");
    const btnCent = document.querySelector(".btn-cent");

    document
        .querySelectorAll(".partner-program-calculator__list-item-label")
        .forEach(el => {
              
            el.addEventListener('click', ()=>{
                if (el.classList.contains('checked') ) {
                    const currentTarget = el.dataset.standard
    
                    document.querySelector(".render-number").textContent = (inputMin * currentTarget).toLocaleString();
                    
                }
            })
          
            if (el.classList.contains('checked') ) {
                const currentTarget = el.dataset.standard

                document.querySelector(".render-number").textContent = (inputMin * currentTarget).toLocaleString();
                
            }
        });

    btnCent.addEventListener('click', () => {
        document
            .querySelectorAll(".partner-program-calculator__list-item-label")
            .forEach(el => {

                if (el.classList.contains('checked')) {
                    const currentTarget = el.dataset.cent
 
                    document.querySelector(".render-number").textContent = (inputMin * currentTarget).toLocaleString();
                }
            });
    })

    btnStandard.addEventListener('click', () => {
        document
            .querySelectorAll(".partner-program-calculator__list-item-label")
            .forEach(el => {

                if (el.classList.contains('checked')) {
                    const currentTarget = el.dataset.standard
 
                    document.querySelector(".render-number").textContent = (inputMin * currentTarget).toLocaleString();
                }
            });
    })

}

renderStartNumber()

 
 
 