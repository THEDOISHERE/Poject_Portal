let cardsList = document.querySelector(".cards");
let card = {
  title: "card",
  link: "url here",
};
let cards = [];

cards.push(card);
console.log(cards);

cards.map((item) => {
  cardsList.innerHTML += `
    
      <div class="card">
        <div class="card-inner">
          <div class="card-front">
            <h2>${card.title}</h2>
          </div>
          <div class="card-back">
            <a href="${card.link}">Project Link</a>
          </div>
        </div>
      </div>
    
    `;
});
