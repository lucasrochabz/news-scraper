import requests
from bs4 import BeautifulSoup
import json

def fetch_news():
  url = "https://www.uol.com.br"
  response = requests.get(url)

  soup = BeautifulSoup(response.text, "html.parser")
  tags = soup.find_all('h3')[:10]

  news_list = []

  for tag in tags:
    title = tag.text.strip()
    news_list.append({ "title": title })
  return news_list

def save_json(data, filepath="./data/news_list.json"):
  with open(filepath, "w", encoding="utf-8") as file:
    json.dump(data, file)

news_list = fetch_news()
save_json(news_list)
print("Arquivo news_list.json gerado com sucesso!")
