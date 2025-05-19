async function fetchNews() {
  const response = await fetch('./data/news_list.json');
  return response.json();
}

function renderNews(data) {
  const container = document.getElementById('article');

  data.forEach((news) => {
    const title = document.createElement('h2');
    title.classList.add('news');
    title.textContent = news.title;

    container.appendChild(title);
  });
}

async function loadNews() {
  const data = await fetchNews();
  renderNews(data);
}

loadNews();
