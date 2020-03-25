import modules from "./modules/all.mjs";

// ----------------- Add cards to carousel -----------------

function populateBody() {
  /* Card structure:
  <div class="carousel-item">
    <div class="col-lg-4 col-md-6">
      <div class="card my-card">
      <img class="card-img-top" src="https://dummyimage.com/400x400/000/fff" />
        <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Card's content</p>
        <br>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div> */

  // Append cards to the element
  modules.forEach((element, index) => {
    // Add class "active" to the first carousel-item
    if (index == 0) {
      $("#cards-carousel").append(`
      <div class="carousel-item active"><div class="col-lg-4 col-md-6">
        <div class="card my-card">
          <img class="card-img-top" src=" ${element.angry().imageUrl}" />
          <div class="card-body">
            <h5 class="card-title">${element.angry().title}</h5>
            <p class="card-text">${element.angry().description}</p>
            <br>
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
            <br>
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

/* ---- Carousel swipe left & right ---- */
document
  .querySelector("#myCarousel")
  .addEventListener("touchstart", handleTouchStart, false);
document
  .querySelector("#myCarousel")
  .addEventListener("touchmove", handleTouchMove, false);

var xDown = null;

function getTouches(evt) {
  return (
    evt.touches || evt.originalEvent.touches // browser API
  ); // jQuery
}

function handleTouchStart(evt) {
  const firstTouch = getTouches(evt)[0];
  xDown = firstTouch.clientX;
}

function handleTouchMove(evt) {
  if (!xDown) {
    return;
  }

  var xUp = evt.touches[0].clientX;
  var xDiff = xDown - xUp;

  if (xDiff > 10) {
    /* left swipe */
    $(".carousel-control-next").click();
  } else {
    /* right swipe */
    $(".carousel-control-prev").click();
  }

  /* reset value */
  xDown = null;
}
