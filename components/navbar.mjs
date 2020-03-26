import emotions from "/modules/all.mjs";

class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand text-white" href="/index.html">Linguaggio del corpo</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link text-white" href="/index.html">Home</a>
          </li>
          <div class="border-right"></div>
          <li class="nav-item dropdown">
            <a class="nav-link text-white dropdown-toggle" href="#emotions" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Emozioni
            </a>
            <div class="dropdown-menu" id="navbar-emotions-dropdown" aria-labelledby="navbarDropdownMenuLink">
            </div>
          </li>
          <div class="border-right"></div>
          <li class="nav-item">
            <a class="nav-link text-white"
              href="/face-detection/face-detection.html"
              >Riconoscimento facciale
            </a>
          </li>
        </ul>
      </div>
    </nav>`;
  }

  static get observedAttributes() {
    return ["active-page"];
  }

  get activePage() {
    return this.getAttribute("active-page");
  }

  set activePage(val) {
    if (val == null) {
      // check for null and undefined
      this.removeAttribute("active-page");
    } else {
      this.setAttribute("active-page", val);
      document
        .querySelector(`.navbar .nav-item .nav-link[href="${hrefParam}"]`)
        .classList.add("active");
    }
  }
}

customElements.define("custom-navbar", Navbar);

// ----- Append emotion to navbar emotion section -----
emotions.forEach(element => {
  var cardData = element.data();
  $("#navbar-emotions-dropdown").append(
    `          <a class="dropdown-item" href="${cardData.view}">${cardData.name}</a>`
  );
});

// ----- Set "active" class into the right navbar element
setTimeout(function() {
  let el = document.querySelector("custom-navbar");
  //   console.log(el.activePage)
  if (el) {
    document
      .querySelector(`.navbar .nav-item .nav-link[href="${el.activePage}"]`)
      .classList.add("active");
  }
}, 1000);
