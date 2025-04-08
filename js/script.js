// 1. Endpoint dell'API
const endpoint = 'https://lanciweb.github.io/demo/api/pictures/';

// 2. Recupero gli elementi dal DOM
const squareElements = document.querySelectorAll('.square');     // Dove inserisco le immagini
const titleElements = document.querySelectorAll('.title');       // Dove inserisco i titoli
const dateElements = document.querySelectorAll('.date');         // Dove inserisco le date

const overlay = document.getElementById('overlay');              // Overlay generale
const overlayImg = document.getElementById('overlay-img');       // Immagine dentro l'overlay
const closeBtn = document.querySelector('.close-btn');           // Bottone per chiudere l'overlay

// 3. Funzione per chiudere l'overlay
closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
});

// 4. Recupero dati da API e popolo i contenuti
axios.get(endpoint).then((resp) => {
  const pictures = resp.data; // Array di oggetti con { url, title, date }

  pictures.forEach((pic, index) => {
    // Controllo che esista il blocco HTML per quell'indice
    if (squareElements[index]) {

      // Inserisco immagine nella square
      const img = document.createElement('img');
      img.src = pic.url;
      img.alt = pic.title;
      img.className = 'img-fluid rounded';
      squareElements[index].appendChild(img);

      // Inserisco titolo e data
      titleElements[index].textContent = pic.title;
      dateElements[index].textContent = pic.date;

      // Aggiungo evento di click per aprire l'overlay con l'immagine giusta
      squareElements[index].addEventListener('click', () => {
        overlayImg.src = pic.url;
        overlayImg.alt = pic.title;
        overlay.style.display = 'flex';
      });
    }
  });
});

/* squareElements.addEventListener('click', function(){
    overlay.style.display = 'flex';
}) 
Non funziona in quanto squareElements è una NodeList, ossia un array di elementi, e addEventListener non è disponibile su tutta la lista di nodi contemporaneamente. */

/* squareElements.forEach(square => {
    square.addEventListener('click', () => {
      overlay.style.display = 'flex';
    });
  });

 SquareElements è una NodeList che contiene tutti gli elementi HTML con la classe .square
 .forEach scorre ogni elemento uno per uno e lo chiama square. */
  