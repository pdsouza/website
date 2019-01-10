document.addEventListener('DOMContentLoaded', function () {
  // Handle navbar burger toggling
  // Modified from https://bulma.io/documentation/components/navbar/

  // Get all "navbar-burger" elements
  const burgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if (burgers.length > 0) {
    // Add a click event on each of them
    burgers.forEach(function (el) {
      el.addEventListener('click', function () {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const targetEl = document.getElementById(target);
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        targetEl.classList.toggle('is-active');
      });
    });
  }
});
