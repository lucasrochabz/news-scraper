async function fetchNews() {
  const response = await fetch('./data/news_list.json');
  return response.json();
}

function renderNews(data) {
  const container = document.getElementById('article');

  data.forEach((news) => {
    const aElement = document.createElement('a');
    aElement.classList.add('news');
    aElement.setAttribute('href', news.href);
    aElement.setAttribute('target', '_blank');

    const h2Element = document.createElement('h2');
    h2Element.textContent = news.title;

    if (news.img) {
      const img = document.createElement('img');
      img.setAttribute('src', news.img);
      aElement.appendChild(img);
    }

    aElement.appendChild(h2Element);

    container.appendChild(aElement);
  });
}

async function loadNews() {
  const data = await fetchNews();
  renderNews(data);
}

loadNews();
