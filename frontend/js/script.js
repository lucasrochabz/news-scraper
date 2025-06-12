const categories = {
  news: 'Jornalismo',
  sport: 'Esporte',
  entertainment: 'Entretenimento',
};

async function fetchNews() {
  const response = await fetch('/data/news_list.json');
  return response.json();
}

function renderSections(data, category) {
  const container = document.getElementById('article');

  const section = document.createElement('section');
  section.classList.add('section');

  const div = document.createElement('div');
  div.classList.add('news');

  const titleElement = document.createElement('h2');
  titleElement.textContent = categories[category];
  section.appendChild(titleElement);

  const smallList = data[category].slice(2, 5);
  smallList.forEach((item) => {
    const aElement = document.createElement('a');
    aElement.classList.add('card');
    aElement.textContent = item.title;

    if (item.href) {
      aElement.setAttribute('href', item.href);
      aElement.setAttribute('target', '_blank');
    }

    if (item.img) {
      const img = document.createElement('img');
      img.setAttribute('src', item.img);
      aElement.appendChild(img);
    }

    div.appendChild(aElement);
    section.appendChild(div);
    container.appendChild(section);
  });
}

async function loadNews() {
  const data = await fetchNews();
  Object.keys(categories).forEach((category) => {
    renderSections(data, category);
  });
}

loadNews();
