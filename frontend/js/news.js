async function fetchNews() {
  const response = await fetch('/data/news_list.json');
  return response.json();
}

function renderNews(data, category) {
  const container = document.getElementById('article');
  const newsList = data[category];

  newsList.forEach((news) => {
    const aElement = document.createElement('a');
    aElement.classList.add('news');
    if (news.href) {
      aElement.setAttribute('href', news.href);
      aElement.setAttribute('target', '_blank');
    }

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

export async function loadNews(category) {
  const data = await fetchNews();
  renderNews(data, category);
}

loadNews();
