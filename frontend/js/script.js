async function fetchNews() {
  const response = await fetch('./data/news_list.json');
  return response.json();
}

function renderNews(data) {
  const container = document.getElementById('article');

  data.forEach((news) => {
    const title = document.createElement('h2');
    title.classList.add('news');
    title.textContent = news.titulo;

    container.appendChild(title);
  });
}

async function loadNews() {
  try {
    const data = await fetchNews();
    renderNews(data);
  } catch (err) {
    document.getElementById('article').textContent =
      'Erro ao carregar notícias.';
    console.error(err);
  }
}

loadNews();
