var slide = document.querySelector('.form-header');
var form = document.querySelector('.hotel-search-form');

slide.addEventListener ("click", function(evt) {
  evt.preventDefault();
  form.classList.toggle("hotel-search-form-hidden");
});
