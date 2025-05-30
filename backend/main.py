import requests
from bs4 import BeautifulSoup
import json

def fetch_html(url):
  response = requests.get(url)
  return response.text

def extract_data(html):
  soup = BeautifulSoup(html, "html.parser")
  tags = soup.find_all('div', class_="feed-post-body")[:10]

  data_list = []

  for tag in tags:
    anchor_tag = tag.find('a', class_='feed-post-link')
    if not anchor_tag:
      continue

    href = anchor_tag.get('href')
    title = anchor_tag.text.strip()
    
    img_tag = tag.find('img')
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
  sources = {
    "news": "https://g1.globo.com",
    "sport": "https://ge.globo.com",
    "entertainment": "https://gshow.globo.com",
  }

  all_data = {}

  for category, url in sources.items():
    html = fetch_html(url)
    data = extract_data(html)
    all_data[category] = data
  
  save_data_json(all_data)
  print('Arquivo all_news.json gerado com sucesso!')

if __name__ == "__main__":
  main()
