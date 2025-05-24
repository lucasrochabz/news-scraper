## 📰 News Scraper v1.0

Este projeto é uma aplicação de extração e exibição de manchetes das últimas notícias de um portal, utilizando **Python** com **BeautifulSoup** para web scraping e **JavaScript** para renderização dinâmica no navegador.

### Tecnologias

- **Python 3**: Linguagem principal para a raspagem de dados.
- **requests**: Biblioteca para obter o HTML da página.
- **BeautifulSoup**: Biblioteca para fazer o parsing e extração dos dados.
- **JavaScript**: Para consumir o JSON e renderizar o conteúdo dinamicamente.
- **HTML/CSS**: Para estrutura e estilo da página web.

### Requisitos

- Python versão 3.8 ou superior
- pip instalado (gerenciador de pacotes do Python)
- Navegador moderno (Chrome, Firefox, Edge, etx.)

### Como instalar?

1. Faça o clone do projeto.
2. Abra o terminal e navegue até a pasta do projeto.
3. Instale as dependências do Python:
   ```bash
   pip install requests beautifulsoup4
   ```
4. Execute o script para gerar o arquivo news_list.json:
   ```bash
   python main.py
   ```
5. Inicie o servidor HTTP local para visualizar a página:
   ```bash
   python -m http.server 8000
   ```
6. Abra o navegador e acesse:
   ```bash
   http://localhost:8000
   ```

<!-- 3. Crie e ative um ambiente virtual:
   ```bash
   python -m venv venv
   # venv\Scripts\activate    # Windows
   source venv/bin/activate  # Linux/macOS
   ```
4. Instale as dependências:
   ```bash
   pip install -r requirements.txt
   ``` -->

### Estrutura do projeto

```bash
news-scraper/
├── backend/
│   └── main.py
│
├── data/
│   └── news_list.json
│
├── frontend/
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│   │   └── news.js
│   │
│   ├── entertainment.html
│   └── sport.html
│
├── index.html
├── .gitignore
├── README.md
└── requirements.txt
```
