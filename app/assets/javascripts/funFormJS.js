
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('toggleProfile').addEventListener('click', function () {
  [].map.call(document.querySelectorAll('.profile'), function(el) {
    el.classList.toggle('profile--open');
    });
  });
});


// var funForm = function () {
//   document.getElementById('toggleProfile').addEventListener('click', function () {
//   [].map.call(document.querySelectorAll('.profile'), function(el) {
//     el.classList.toggle('profile--open');
//     });
//   });
// };
