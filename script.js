// const originalColor = "green";

// gsap.to(".nav", {
//     backgroundImage: "linear-gradient(to right, green, beige)",
//     padding:"3.2vw",
//     // duration: 0.1,
//     height: "30px",
//     scrollTrigger: {
//         trigger: ".nav",
//         scroller: "body",
//         start: 'top-10%',
//         scrub: 1,
//     }
// });

// gsap.to(".nav", {
//     background: "linear-gradient(to right, green, white)",
//     duration: 0.5,
//     height: "90px",
//     scrollTrigger: {
//         trigger: ".nav",
//         scroller: "body",
//         start: 'top-10%',
//         scrub: 1,
//         onEnter: () => {
//             document.querySelector(".logo").style.color = "black";
//         },
//         onLeaveBack: () => {
//             document.querySelector(".logo").style.color = "white";
//         }
//     }
// });




gsap.from(".nav", {
    y: -100,
    duration: 1,
    delay: 0.5,
    stagger: 2,
    opacity: 0,
})

gsap.from('.header', {
    x: -100,
    duration: 2,
    delay: 1.5,
    opacity: 0,
})

gsap.from("#card-container .line1", {
    x: -100,
    opacity: 0,
    duration: 3,
    scrollTrigger: {
        trigger: "#card-container",
        scroller: 'body',
        start: "top 85%",
        end: "top 50%",
        scrub: 12
    }
});
gsap.from("#card-container .line2", {
    x: -50,
    opacity: 0,
    duration: 4,
    scrollTrigger: {
        trigger: "#card-container",
        scroller: 'body',
        start: "top 85%",
        end: "top 55%",
        scrub: 15
    }
});

document.querySelectorAll('.HomeBtn').forEach(card => {
    card.addEventListener('click', function () {
        const url = card.getAttribute('data-url');
        window.location.href = url;
    });
});

document.querySelectorAll('.lm').forEach(card => {
    card.addEventListener('click', function () {
        const url = card.getAttribute('data-url');
        window.open(url, '_blank');
    });
});

document.querySelectorAll('.contact').forEach(card => {
    card.addEventListener('click', function () {
        const url = card.getAttribute('data-url');
        window.open(url);
    });
});

document.querySelectorAll('.logo').forEach(card => {
    card.addEventListener('click', function () {
        const url = card.getAttribute('data-url');
        window.open(url);
    });
});



document.querySelectorAll('.Btn').forEach(card => {
    card.addEventListener('click', function () {
        const url = card.getAttribute('data-url');
        window.location.href = url;
    });
});
document.querySelectorAll('.Btns').forEach(card => {
    card.addEventListener('click', function () {
        const url = card.getAttribute('data-url');
        if (url) { // Ensure data-url exists
            window.location.href = url;
        }
    });
});

function openEmail() {
    window.location.href = "mailto:tslogisticsolutions@gmail.com";
}
