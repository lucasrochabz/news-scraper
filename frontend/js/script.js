async function fetchNews() {
  const response = await fetch('/data/news_list.json');
  return response.json();
}

function renderCards(data, category) {
  const container = document.getElementById('article');
  const section = document.createElement('section');

  const smallList = data[category].slice(2, 5);

  smallList.forEach((item) => {
    section.classList.add('card');

    const aElement = document.createElement('a');
    aElement.classList.add('news');

    if (item.href) {
      aElement.setAttribute('href', item.href);
      aElement.setAttribute('target', '_blank');
    }

    const h2Element = document.createElement('h2');
    h2Element.textContent = item.title;

    if (item.img) {
      const img = document.createElement('img');
      img.setAttribute('src', item.img);
      aElement.appendChild(img);
    }

    aElement.appendChild(h2Element);
    section.appendChild(aElement);

    container.appendChild(section);
  });
}

async function loadNews() {
  const data = await fetchNews();
  renderCards(data, 'news');
  renderCards(data, 'sport');
  renderCards(data, 'entertainment');
}

loadNews();
