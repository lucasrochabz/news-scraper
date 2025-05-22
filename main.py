import requests
from bs4 import BeautifulSoup
import json

def fetch_html():
  url = 'https://www.globo.com'
  response = requests.get(url)
  return response.text

def extract_data(html):
  soup = BeautifulSoup(html, "html.parser")
  tags = soup.find_all('a', class_="post__link")[:10]

  data_list = []

  for tag in tags:
    href = tag.get('href')

    title_tag = tag.find('h2', class_='post__title')
    title = title_tag.text.strip()

    img_tag = tag.find('img', )
    img_src = img_tag.get('src') if img_tag else None

    data_list.append({ 
      "title": title,
      "href": href,
      "img": img_src
    })
  return data_list

def save_data_json(data, filepath="./data/news_list.json"):
  with open(filepath, "w", encoding="utf-8") as file:
    json.dump(data, file, ensure_ascii=False, indent=2)

def main():
  html = fetch_html()
  news_list = extract_data(html)
  save_data_json(news_list)
  print("Arquivo news_list.json gerado com sucesso!")

if __name__ == "__main__":
  main()
