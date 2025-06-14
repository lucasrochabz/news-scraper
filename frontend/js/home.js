const departments = {
  journalism: 'Jornalismo',
  sport: 'Esporte',
  entertainment: 'Entretenimento',
};

async function fetchNews() {
  const response = await fetch('/data/news_list.json');
  return response.json();
}

function renderSections(data, department) {
  const container = document.getElementById('article');

  const section = document.createElement('section');
  section.classList.add('section');

  const div = document.createElement('div');
  div.classList.add('news');

  const titleElement = document.createElement('h2');
  titleElement.textContent = departments[department];
  section.appendChild(titleElement);

  const smallList = data[department].slice(2, 5);
  smallList.forEach((item) => {
    const aElement = document.createElement('a');
    aElement.classList.add('card');
    aElement.textContent = item.title;
    aElement.style.color = `var(--${department}-color)`;

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
  Object.keys(departments).forEach((department) => {
    renderSections(data, department);
  });
}

loadNews();
