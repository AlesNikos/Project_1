let btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  animate(function(timePassed) {
    twiti.style.left = timePassed / 5 + 'px';
    }, 2000);
});

function animate(draw, duration) {
  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    let timePassed = time - start;

    if (timePassed > duration) timePassed = duration;
    draw(timePassed);

    if (timePassed < duration) {
      requestAnimationFrame(animate);
    }

  });
}