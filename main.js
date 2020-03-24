import modules from "./modules/all.mjs";

// ----------------- CARDS -----------------
const cards = [];

/*
Card structure:

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
*/

function populateBody() {

  // Append a hidden card before the element
  // $("#index-carousel").append("<div class='card my-card hidden' style='cursor: pointer; pointer-events: none; border: 0;'></div>");

  // Append cards after the element
  modules.forEach(element => {
    cards.push(`<div class="card my-card">
        <img class="card-img-top" src="${element.angry().imageUrl}">
        <div class="card-body">
          <h5 class="card-title">${element.angry().title}</h5>
          <p class="card-text">${element.angry().description}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`);
  });

  // console.log(cards)

  // Append a hidden card after the element
  // $("#index-carousel").append("<div class='card my-card hidden' style='cursor: pointer; pointer-events: none; border: 0;'></div>");
}

populateBody();

// ----------------- Carousel logic -----------------
var num = cards.length;
var even = num / 2
var odd = (num + 1) / 2

if (num % 2 == 0) {
  $("#index-carousel td.active").append(cards[even]);
  $("#index-carousel td.active .my-card").addClass("active");

  $("#index-carousel td.prev").append(cards[even - 1]);
  $("#index-carousel td.prev .my-card").removeClass("active");
  $("#index-carousel td.prev .my-card").addClass("prev");

  $("#index-carousel td.next").append(cards[even + 1]);
  $("#index-carousel td.next .my-card").removeClass("active");
  $("#index-carousel td.next .my-card").addClass("next");
} else {
  $("#index-carousel td.active").append(cards[odd]);
  $("#index-carousel td.active .my-card").addClass("active");

  $("#index-carousel td.prev").append(cards[odd - 1]);
  $("#index-carousel td.prev .my-card").removeClass("active");
  $("#index-carousel td.prev .my-card").addClass("prev");

  $("#index-carousel td.next").append(cards[odd + 1]);
  $("#index-carousel td.next .my-card").removeClass("active");
  $("#index-carousel td.next .my-card").addClass("next");
}

// ---- Carousel events ----

$(".my-card").click(function () {
  // Remove all classes
  $(this).removeClass("prev active next");

  $(this)
    .parent()
    .siblings()
    .children()
    .removeClass("prev active next");

  // Add next element
  if ($(this) // If the element has no next, add it from the cards array
    .parent()
    .next()
    .children()[0] == undefined) {

    cards.forEach(element => {
      if (element == getStringFromNode($(this)[0]))
      $("#index-carousel td.next").innerHTML = element;
    })
  } else $(this)
    .parent()
    .next()
    .children()
    .addClass("next");

  // Add prev element
  if ($(this) // If the element has no next, add it from the cards array
    .parent()
    .prev()
    .children()[0] == undefined) {

  } else $(this)
    .parent()
    .next()
    .children()
    .addClass("prev");

  // Add active class
  $(this).addClass("active");
});

var getStringFromNode = (function() {
  var DIV = document.createElement("div");

  if ('outerHTML' in DIV)
    return function(node) {
      return node.outerHTML;
    };

  return function(node) {
    var div = DIV.cloneNode();
    div.appendChild(node.cloneNode(true));
    return div.innerHTML;
  };

})();

// Keyboard carousel navigation 

$("html body").keydown(function (e) {
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