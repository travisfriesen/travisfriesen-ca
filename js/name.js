// Wrap every letter in a span
var textWrapper = document.querySelector('.text-primary .name-letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='name-letters'>$&</span>");

anime.timeline({loop: false})
    .add({
        targets: '.text-primary .line',
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 700
    })
    .add({
        targets: '.text-primary .line',
        translateX: [0, document.querySelector('.text-primary .name-letters').getBoundingClientRect().width + 10],
        easing: "easeOutExpo",
        duration: 700,
        delay: 100
    }).add({
    targets: '.text-primary .name-letters',
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i + 1)
});

anime.timeline({loop: true})
    .add({
        targets: '.line',
        opacity: [0, 1],
        duration: 500,
        delay: 1000,
        offset: '+=1700'
    });

/*anime.timeline({loop: true})
.add({
  targets: '.hand-emoji',
  rotateZ: [-30, 30],
  translateX: path('x'),
  translateY: path('y'),
})*/