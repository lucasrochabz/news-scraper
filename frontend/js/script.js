async function fetchNews() {
  const response = await fetch('./data/news_list.json');
  return response.json();
}

function renderNews(data) {
  const container = document.getElementById('article');

  data.forEach((news) => {
    const div = document.createElement('div');
    div.classList.add('news');

    const img = document.createElement('img');
    if (news.img) {
      img.setAttribute('src', news.img);
    }

    const link = document.createElement('a');
    link.setAttribute('href', news.href);
    link.setAttribute('target', '_blank');
    link.textContent = news.title;

    div.appendChild(img);
    div.appendChild(link);

    container.appendChild(div);
  });
}

async function loadNews() {
  const data = await fetchNews();
  renderNews(data);
}

loadNews();
