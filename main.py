import requests
from bs4 import BeautifulSoup
import json

def fetch_html(url):
  response = requests.get(url)
  return response.text

def extract_news_data(html):
  soup = BeautifulSoup(html, "html.parser")
  tags = soup.find_all('div', class_="feed-post-body")[:10]

  data_list = []

  for tag in tags:
    anchor_tag = tag.find('a', class_='feed-post-link')

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

def extract_sport_data(html):
  soup = BeautifulSoup(html, "html.parser")
  tags = soup.find_all('div', class_="feed-post-body")[:10]

  data_list = []

  for tag in tags:
    anchor_tag = tag.find('a', class_='feed-post-link')

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

def extract_entertainment_data(html):
  soup = BeautifulSoup(html, "html.parser")
  tags = soup.find_all('div', class_="feed-post-body")[:10]

  data_list = []

  for tag in tags:
    anchor_tag = tag.find('a', class_='feed-post-link')

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
  html_news = fetch_html("https://g1.globo.com/")
  html_sport = fetch_html("https://ge.globo.com/")
  html_entertainment = fetch_html("https://g1.globo.com/")
  
  news_list = extract_news_data(html_news)
  sport_list = extract_sport_data(html_sport)
  list_entertainment = extract_entertainment_data(html_entertainment)

  save_data_json(news_list, "./data/news_list.json")
  save_data_json(sport_list, "./data/sport_list.json")
  save_data_json(list_entertainment, "./data/entertainment_list.json")

  print("Arquivo news_list.json, sport_list e list_entertainment gerado com sucesso!")

if __name__ == "__main__":
  main()
