## 📰 News Scraper v1.1.0

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
3. Crie e ative um ambiente virtual:

   ```bash
   python -m venv venv

   # No Windows:
   venv\Scripts\activate

   # No Linux/macOS:
   source venv/bin/activate
   ```

4. Instale as dependências:
   ```bash
   pip install -r requirements.txt
   ```
5. Execute o script para gerar o arquivo news_list.json:
   ```bash
   python backend/main.py
   ```
6. Visualize a página no navegador de uma das seguintes formas:

   **Opção 1 – Servidor HTTP local via terminal**:

   ```bash
   python3 -m http.server 8000
   ```

   Depois, acesse: http://localhost:8000

   **Opção 2 – Live Server (VS Code)**:

   - Clique com o botão direito no arquivo index.html e selecione "Open with Live Server".
   - A página será aberta automaticamente no navegador.

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
│   │   ├── department.css
│   │   ├── global.css
│   │   └── home.css
│   │
│   ├── js/
│   │   ├── department.js
│   │   └── script.js
│   │
│   ├── entertainment.html
│   ├── journalism.html
│   └── sport.html
│
├── .gitignore
├── index.html
├── README.md
└── requirements.txt
```
