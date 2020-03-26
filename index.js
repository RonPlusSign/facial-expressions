import emotions from "/facial-expressions/modules/all.mjs";

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
        <a href="#" class="btn btn-primary">Explore</a>
      </div>
    </div>
  </div> */

  emotions.forEach((element, index) => {
    // ----- Append cards to the element -----

    var cardData = element.data();
    // Add class "active" to the first carousel-item
    if (index == 0) {
      $("#cards-carousel").append(`
      <div class="carousel-item active"><div class="col-lg-4 col-md-6">
        <div class="card my-card">
          <img class="card-img-top" src=" ${cardData.imageUrl}" />
          <div class="card-body">
            <h5 class="card-title">${cardData.title}</h5>
            <p class="card-text">${cardData.briefDescription}</p>
            <br>
            <a href="${cardData.buttonLink}" class="btn btn-primary">Esplora</a>
          </div>
        </div>
      </div>`);
    } else
      $("#cards-carousel").append(`
      <div class="carousel-item"><div class="col-lg-4 col-md-6">
        <div class="card my-card">
          <img class="card-img-top" src=" ${cardData.imageUrl}" />
          <div class="card-body">
            <h5 class="card-title">${cardData.title}</h5>
            <p class="card-text">${cardData.briefDescription}</p>
            <br>
            <a href="${cardData.buttonLink}" class="btn btn-primary">Esplora</a>
          </div>
        </div>
      </div>`);
  });
}

populateBody();

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
  );
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
  var xDiff = xDown - xUp; // represents how many pixels have been swiped

  // console.log(xDiff);

  if (xDiff > 10) {
    /* right swipe */
    $(".carousel-control-next").click();
  } else if (xDiff < -10) {
    /* left swipe */
    $(".carousel-control-prev").click();
  }

  /* reset value */
  xDown = null;
}

// ----- Keyboard carousel navigation -----

$("html body").keydown(function(e) {
  if (e.keyCode == 37) {
    // left
    $(".carousel-control-prev").click();
  } else if (e.keyCode == 39) {
    // right
    $(".carousel-control-next").click();
  }
});
