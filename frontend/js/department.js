async function fetchNews() {
  const response = await fetch('../data/news_list.json');
  return response.json();
}

function renderNews(data, department) {
  const container = document.getElementById('article');
  const newsList = data[department];

  newsList.forEach((news) => {
    const aElement = document.createElement('a');
    aElement.textContent = news.title;
    aElement.style.color = `var(--${department}-color)`;
    aElement.classList.add('card');

    if (news.href) {
      aElement.setAttribute('href', news.href);
      aElement.setAttribute('target', '_blank');
    }

    if (news.img) {
      const img = document.createElement('img');
      img.setAttribute('src', news.img);
      aElement.appendChild(img);
    }

    container.appendChild(aElement);
  });
}

export async function loadNews(department) {
  const data = await fetchNews();
  renderNews(data, department);
}
