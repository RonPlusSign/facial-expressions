import emotions from "/modules/all.mjs";

class EmotionBody extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = ``;
  }
}

customElements.define("emotion-body", EmotionBody);

function renderEmotionBody(emotion) {
  emotions.forEach(element => {
    var emotionData = element.data();

    if (emotionData.name === emotion) {
      document.querySelector("emotion-body").innerHTML = `
      <table class="table container emotion-content">
      <tr class="row">
        <td
          class="col-sm-4 col-md-6 col-lg-4 text-center"
        >
          <img src="${emotionData.imageUrl}" style="border: 3px solid ${emotionData.color};" />
        </td>
        <td class="col-sm-8 col-md-6 col-lg-8">
          <h3 class="text-center" style="background-color: ${emotionData.color};">${emotionData.title}</h3>
          <p class="text-justify description">
          ${emotionData.description}
          </p>
        </td>
      </tr>
    </table>
      `;
    }
  });
}

setTimeout(function() {
  let el = document.querySelector("emotion-body");
  // console.log(el)
  if (el) {
    renderEmotionBody(el.getAttribute("emotion"));
  }
}, 1000);
