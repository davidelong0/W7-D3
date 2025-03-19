const library = function () {
  const apiUrl = "https://striveschool-api.herokuapp.com/books";

  fetch(apiUrl)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nel caricamento dei libri");
      }
    })
    .then((books) => {
      console.log("Lista dei libri:", books);

      const container = document.getElementById("book-container");
      container.innerHTML = "";

      books.forEach((book) => {
        const card = document.createElement("div");
        card.classList.add("col", "col-12", "col-lg-3", "mb-2");

        card.innerHTML = `
            <div class="card text-center w-100 h-100 shadow-lg">
              <img src="${book.img}" class="card-img-top img-fluid fixed-img" alt="${book.title}" />
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">${book.title}</h5>
                <p class="card-text">Prezzo: ${book.price}€</p>
                <button class="btn btn-danger mt-auto scarta-btn">Scarta</button>
              </div>
            </div>
          `;

        container.appendChild(card);

        const scartaBtn = card.querySelector(".scarta-btn");
        scartaBtn.addEventListener("click", () => {
          card.remove();
        });
      });
    })
    .catch((err) => {
      console.log("Errore nel caricamento:", err);
    });
};

library();
