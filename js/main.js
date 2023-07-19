window.addEventListener('load', () => {
    const toggleButton = document.querySelector('.toggle-menu')
    const mobileMenu = document.querySelector('.mobile-menu')
    const menu = document.querySelector('.menu')
    const btnCLose = document.querySelector('.btn-close')
    const menuLinks =document.querySelectorAll('.partnership-programs__nav-link')

    function onHandleToggleMenu () {
        toggleButton.addEventListener('click',(e)=>{
            mobileMenu.classList.toggle('is-active')
            menu.classList.toggle('is-active')
        })

        menu.addEventListener('click',(e)=>{

            const isMenuClicked = mobileMenu.contains(e.target);
            console.log(isMenuClicked)

            if(!isMenuClicked) {
                menu.classList.remove('is-active')
            }

        })

        btnCLose.addEventListener('click',()=>{
            menu.classList.remove('is-active')
        })

        menuLinks.forEach( el => el.addEventListener('click',()=>{
            menu.classList.remove('is-active')
        }))


    }

    onHandleToggleMenu ()

    const counters = document.querySelectorAll('.cpa-program-advantages__body-title span')
    const firstCounter = document.querySelector('.cpa-program-advantages__item:first-child')

    window.addEventListener('scroll', () => {
        benefitsCounter()
    })

    function hasReached(el) {
        let top = el.getBoundingClientRect().top
        console.log(top)

        if (window.innerHeight >= top + el.offsetHeight) return true
        return false
    }

    function updateCounter(num, maxNum) {
        const currentNum = +num.innerText

        if (currentNum < maxNum) {
            num.innerText = currentNum + 1;
            setTimeout(() => {
                updateCounter(num, maxNum)
            }, 3)
        }
    }

    function benefitsCounter() {
        if (!hasReached) return false

        counters.forEach(el => {
            let target = el.dataset.target

            setTimeout(() => {
                updateCounter(el, target)
            }, 400)
        })
    }

    // =========== Gsap ============= //

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".hero-img-1", {
        scrollTrigger: {
            start: "top bottom",
            scrub: 1,
        },
        y: 100,
    })

    gsap.to(".hero-img-2", {
        scrollTrigger: {
            start: "top bottom",
            scrub: 1,
        },
        y: -100,
    })

    gsap.to(".profit-icons", {
        scrollTrigger: {
            start: "top bottom",
            scrub: 1,
        },
        y: 60,
    })

    ScrollTrigger.matchMedia({
        '(min-width:768px)': function () {

            gsap.set(".panel", { zIndex: (i, target, targets) => targets.length - i });

            var images = gsap.utils.toArray('.panel:not(.img-5)');

            images.forEach((image, i) => {

                var tl = gsap.timeline({

                    scrollTrigger: {
                        trigger: " .wrapper",
                        start: () => "top -" + (window.innerHeight * (i + 0.1)),
                        end: () => "+=" + window.innerHeight,
                        scrub: 1,
                    }
                })

                tl.to(image, { "clip-path": "inset(0 0 200% 0)", ease: "power1.inOut", });

            });



                gsap.set(".panel-text", { zIndex: (i, target, targets) => targets.length - i });

                const texts = gsap.utils.toArray('.panel-text');

                texts.forEach((text, i) => {

                    var tl = gsap.timeline({

                        scrollTrigger: {
                            trigger: ".wrapper",
                            start: () => "top -" + (window.innerHeight * i),
                            end: () => "+=" + window.innerHeight,
                            scrub: 1,
                        }

                    })

                    gsap
                        .from(text, {
                            scrollTrigger: {
                                trigger: text,
                                start: "top bottom",
                                scrub: 1,
                            },
                            duration: 1, y: 50,
                        })

                });

        },

    })


    const firstStep = document.querySelector('.partnership-programs-step__img-container:first-child');
    const progressBar = document.querySelectorAll('.partnership-programs-step__progress svg circle');
    const stepCounters =document.querySelectorAll('.step-counter');


    window.addEventListener('scroll',stepCounter)

    function hasReached (el) {
        if(el === null)
            return false
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

})

$( window ).on( "load",function () {
    const currentButton = $('.partnership-programs-plans__btn-container .btn-base')
    currentButton.hover(function () {


        if ($(this).hasClass('btn-base-small')) {
            $(this).addClass('is-active')
            $(this).removeClass('btn-base-small')
            $(this).addClass('btn-base-lg')
        }

        $(this).siblings($('.btn-base')).removeClass('is-active')
        $(this).siblings($(".btn-base")).removeClass('btn-base-lg')
        $(this).siblings($(".btn-base")).addClass('btn-base-small')
    });


    $('.owl-carousel-plans').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                stagePadding: 0,
                URLhashListener: true,
                autoplayHoverPause: true,
                startPosition: "URLHash",
            },
            900: {
                items: 2,
                nav: false,
            }
        }
    })


    $('.owl-carousel-awards').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,

        responsive: {
            0: {
                items: 2
            },
            575: {
                items: 2,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                stagePadding: 0,
                URLhashListener: true,
                autoplayHoverPause: true,
                startPosition: "URLHash",
            },

        }
    })


    $('.owl-carousel-features').owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        dots: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        stagePadding: 0,
        URLhashListener: true,
        autoplayHoverPause: true,
        startPosition: "URLHash",
        responsive: {
            0: {
                items: 1,
                dots: true,
            },
            600: {
                items: 1,
                dots: true,
            },

        },

    })


    function collapsed() {
        $(".card-header h2").find("button").addClass('collapsed')
    }
    collapsed()

    // plans carousel//
    $('.owl-carousel-price').owlCarousel({
        loop: false,
        margin: 30,
        stagePadding: 50,
        nav: false,
        responsive: {
            0: {
                items: 1,
                stagePadding: 0,
                margin: 10,
            },
            600: {
                items: 1
            },

        }
    })

    // plans benefits//
    $('.owl-carousel-benefits').owlCarousel({
        loop: false,
        margin: 20,
        stagePadding: 50,
        nav: false,
        responsive: {
            0: {
                items: 1,
                stagePadding: 0,
                margin: 10,
            },
            600: {
                items: 1
            },

        }
    })

    // plans benefits//
    $('.owl-carousel-why').owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                margin: 20,
            },
            600: {
                items: 1,
                nav: false,
            },

        }
    })


    //splide//
    new Splide('#splide-first', {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        perPage: 3,
        pagination: false,
        arrows: false,
        dots: false,
        autoScroll: {
            speed: 1,
        },
        breakpoints: {

            575: {
                perPage: 2,
            },
            320: {
                perPage: 1,
            },
        }
    }).mount(window.splide.Extensions);

})


