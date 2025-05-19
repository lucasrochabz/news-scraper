import requests
from bs4 import BeautifulSoup
import json

def fetch_html():
  url = 'https://www.uol.com.br'
  response = requests.get(url)
  return response.text

def extract_news(html):
  soup = BeautifulSoup(html, "html.parser")
  tags = soup.find_all('h3')[:10]

  data_list = []

  for tag in tags:
    title = tag.text.strip()
    data_list.append({ "title": title })
  return data_list

def save_json(data, filepath="./data/news_list.json"):
  with open(filepath, "w", encoding="utf-8") as file:
    json.dump(data, file)

def main():
  html = fetch_html()
  news_list = extract_news(html)
  save_json(news_list)
  print("Arquivo news_list.json gerado com sucesso!")

if __name__ == "__main__":
  main()
