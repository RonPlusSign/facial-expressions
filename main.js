import modules from "./modules/all.mjs";

// ----------------- CARDS -----------------

/*
Card structure:
// Add class "active" to carousel-item if necessary

<div class="carousel-item">
  <div class="col-lg-4 col-md-6">
    <div class="card my-card">
      <img class="card-img-top" src="https://dummyimage.com/400x400/000/fff" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
*/

function populateBody() {
  // Append cards to the element
  modules.forEach((element, index) => {
    if (index == 0) {
      $("#cards-carousel").append(`
      <div class="carousel-item active"><div class="col-lg-4 col-md-6">
        <div class="card my-card">
          <img class="card-img-top" src=" ${element.angry().imageUrl}" />
          <div class="card-body">
            <h5 class="card-title">${element.angry().title}</h5>
            <p class="card-text">${element.angry().description}</p>
            <a href="#" class="btn btn-primary">Esplora</a>
          </div>
        </div>
      </div>`);
    } else
      $("#cards-carousel").append(`
      <div class="carousel-item"><div class="col-lg-4 col-md-6">
        <div class="card my-card">
          <img class="card-img-top" src=" ${element.angry().imageUrl}" />
          <div class="card-body">
            <h5 class="card-title">${element.angry().title}</h5>
            <p class="card-text">${element.angry().description}</p>
            <a href="#" class="btn btn-primary">Esplora</a>
          </div>
        </div>
      </div>`);
  });
}

populateBody();

// ----------------- Carousel logic -----------------
var num = $(".my-card").length;
var even = num / 2;
var odd = (num + 1) / 2;

if (num % 2 == 0) {
  $(".my-card:nth-child(" + even + ")").addClass("active");
  $(".my-card:nth-child(" + even + ")")
    .prev()
    .addClass("prev");
  $(".my-card:nth-child(" + even + ")")
    .next()
    .addClass("next");
} else {
  $(".my-card:nth-child(" + odd + ")").addClass("active");
  $(".my-card:nth-child(" + odd + ")")
    .prev()
    .addClass("prev");
  $(".my-card:nth-child(" + odd + ")")
    .next()
    .addClass("next");
}

// ---- Carousel events ----

$(".my-card").click(function() {
  $(this).removeClass("prev next");

  $(this)
    .siblings()
    .removeClass("prev active next");

  $(this).addClass("active");
  $(this)
    .prev()
    .addClass("prev");
  $(this)
    .next()
    .addClass("next");
});

// Keyboard carousel navigation

$("html body").keydown(function(e) {
  if (e.keyCode == 37) {
    // left
    $(".active")
      .prev()
      .trigger("click");
  } else if (e.keyCode == 39) {
    // right
    $(".active")
      .next()
      .trigger("click");
  }
});

/* -------------------- Carousel logic -------------------- */

$("#myCarousel").carousel({
  interval: 2000
});

$(".carousel .carousel-item").each(function() {
  var minPerSlide = 4;
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(":first");
  }
  next
    .children(":first-child")
    .clone()
    .appendTo($(this));

  for (var i = 0; i < minPerSlide; i++) {
    next = next.next();
    if (!next.length) {
      next = $(this).siblings(":first");
    }

    next
      .children(":first-child")
      .clone()
      .appendTo($(this));
  }
});
