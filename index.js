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
        <a href="#" class="btn btn-primary">Explore
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve" > <g> <g> <path d="M484.14,226.886L306.46,49.202c-5.072-5.072-11.832-7.856-19.04-7.856c-7.216,0-13.972,2.788-19.044,7.856l-16.132,16.136 c-5.068,5.064-7.86,11.828-7.86,19.04c0,7.208,2.792,14.2,7.86,19.264L355.9,207.526H26.58C11.732,207.526,0,219.15,0,234.002 v22.812c0,14.852,11.732,27.648,26.58,27.648h330.496L252.248,388.926c-5.068,5.072-7.86,11.652-7.86,18.864 c0,7.204,2.792,13.88,7.86,18.948l16.132,16.084c5.072,5.072,11.828,7.836,19.044,7.836c7.208,0,13.968-2.8,19.04-7.872 l177.68-177.68c5.084-5.088,7.88-11.88,7.86-19.1C492.02,238.762,489.228,231.966,484.14,226.886z" /> </g> </g> </svg>
        </a>
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
          <img class="card-img-top" src="/facial-expressions${cardData.imageUrl}" />
          <div class="card-body">
            <h5 class="card-title">${cardData.title}</h5>
            <p class="card-text text-justify">${cardData.briefDescription}</p>
            <br>
            <a href="/facial-expressions${cardData.buttonLink}" class="btn btn-primary">Esplora
            <svg style="fill: white; max-width: 20px; padding-left: 5px;" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve" > <g> <g> <path d="M484.14,226.886L306.46,49.202c-5.072-5.072-11.832-7.856-19.04-7.856c-7.216,0-13.972,2.788-19.044,7.856l-16.132,16.136 c-5.068,5.064-7.86,11.828-7.86,19.04c0,7.208,2.792,14.2,7.86,19.264L355.9,207.526H26.58C11.732,207.526,0,219.15,0,234.002 v22.812c0,14.852,11.732,27.648,26.58,27.648h330.496L252.248,388.926c-5.068,5.072-7.86,11.652-7.86,18.864 c0,7.204,2.792,13.88,7.86,18.948l16.132,16.084c5.072,5.072,11.828,7.836,19.044,7.836c7.208,0,13.968-2.8,19.04-7.872 l177.68-177.68c5.084-5.088,7.88-11.88,7.86-19.1C492.02,238.762,489.228,231.966,484.14,226.886z" /> </g> </g> </svg>            </a>
          </div>
        </div>
      </div>`);
    } else
      $("#cards-carousel").append(`
      <div class="carousel-item"><div class="col-lg-4 col-md-6">
        <div class="card my-card">
          <img class="card-img-top" src="/facial-expressions${cardData.imageUrl}" />
          <div class="card-body">
            <h5 class="card-title">${cardData.title}</h5>
            <p class="card-text text-justify">${cardData.briefDescription}</p>
            <br>
            <a href="/facial-expressions${cardData.buttonLink}" class="btn btn-primary">Esplora
            <svg style="fill: white; max-width: 20px; padding-left: 5px;" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve" > <g> <g> <path d="M484.14,226.886L306.46,49.202c-5.072-5.072-11.832-7.856-19.04-7.856c-7.216,0-13.972,2.788-19.044,7.856l-16.132,16.136 c-5.068,5.064-7.86,11.828-7.86,19.04c0,7.208,2.792,14.2,7.86,19.264L355.9,207.526H26.58C11.732,207.526,0,219.15,0,234.002 v22.812c0,14.852,11.732,27.648,26.58,27.648h330.496L252.248,388.926c-5.068,5.072-7.86,11.652-7.86,18.864 c0,7.204,2.792,13.88,7.86,18.948l16.132,16.084c5.072,5.072,11.828,7.836,19.044,7.836c7.208,0,13.968-2.8,19.04-7.872 l177.68-177.68c5.084-5.088,7.88-11.88,7.86-19.1C492.02,238.762,489.228,231.966,484.14,226.886z" /> </g> </g> </svg>            </a>
          </div>
        </div>
      </div>`);
  });
}

populateBody();

/* -------------------- Carousel logic -------------------- */

$("#myCarousel").carousel({
  interval: 4000
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
