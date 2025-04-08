const endpoint = 'https://lanciweb.github.io/demo/api/pictures/';
const squareElements = document.querySelectorAll('.square'); //Recupero immagine
const titleElements = document.querySelectorAll('.title');
const dateElements = document.querySelectorAll('.date');

axios.get(endpoint).then((resp) => {
  const pictures = resp.data;

  pictures.forEach((pic, index) => {
    if (squareElements[index]) {
      // Inserisco immagine
      const img = document.createElement('img');
      img.src = pic.url;
      img.alt = pic.title;
      img.className = 'img-fluid rounded';
      squareElements[index].appendChild(img);

      // Inserisco titolo e data
      titleElements[index].textContent = pic.title;
      dateElements[index].textContent = pic.date;
    }
  });
});

// Vado a recuperare gli elementi che mi occorrono per l'overlay
const overlay = document.getElementById('overlay');
const closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click', function(){
    overlay.style.display = 'none';
})

/* squareElements.addEventListener('click', function(){
    overlay.style.display = 'flex';
}) 
Non funziona in quanto squareElements è una NodeList, ossia un array di elementi, e addEventListener non è disponibile su tutta la lista di nodi contemporaneamente. */

squareElements.forEach(square => {
    square.addEventListener('click', () => {
      overlay.style.display = 'flex';
    });
  });

/* SquareElements è una NodeList che contiene tutti gli elementi HTML con la classe .square
.forEach scorre ogni elemento uno per uno e lo chiama square. */
  