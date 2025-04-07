const endpoint = 'https://lanciweb.github.io/demo/api/pictures/';
const squareElements = document.querySelectorAll('.square');
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

