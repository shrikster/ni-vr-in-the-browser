AFRAME.registerComponent('sky-colors', {
  dependencies: ['material'],

  init: function () {
    var el = this.el;
    el.setAttribute('material', 'color', getSkyColor());
    // Set material component's color property to a random color from our array.
    setInterval(function () {
      el.setAttribute('material', 'color', getSkyColor());
    }, 1000)
  }
});


function getSkyColor() {
  const colors = ["#25A5C8", "#DD6B9F", "#155860", "#872DA6", "#63B910"];
  return colors[Math.floor(Math.random() * 5)];
}

AFRAME.registerComponent('tilt-light', {
  dependencies: ['postion'],

  init: function () {
    var el = this.el;
    const starX = 0;
    // Set material component's color property to a random color from our array.
    el.setAttribute('material', 'color', getSkyColor());
    setInterval(function () {
      el.setAttribute('material', 'color', getSkyColor());
    }, 1000)
  }
});