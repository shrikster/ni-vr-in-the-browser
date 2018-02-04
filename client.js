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
