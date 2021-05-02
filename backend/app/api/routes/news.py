from typing import List

from fastapi import APIRouter, Body, Depends  
from starlette.status import HTTP_201_CREATED  

from app.models.news import NewsCreate, NewsPublic  
from app.db.repositories.news import NewsRepository  
from app.api.dependencies.database import get_repository  


router = APIRouter()


@router.get("/")
async def get_all_newsItems() -> List[dict]:
    newsItems = [
        { "id": 1, 
          "headline": "Afarak notes quarterly decline in output, particularly ferroalloys", 
          "article": "LSE- and Nasdaq-listed Afarak Group has reported a 50.6% decline in production for the first..."
        },
        { "id": 1, 
          "headline": "Jubilee’s Project Roan starts producing copper", 
          "article": "Dual-listed Jubilee Metals’ Project Roan has started production of intermediate copper..."
        },
    ]

    return newsItems


@router.post("/", response_model=NewsPublic, name="news:create-news", status_code=HTTP_201_CREATED)
async def create_new_news(
    new_news: NewsCreate = Body(..., embed=True),
    news_repo: NewsRepository = Depends(get_repository(NewsRepository)),
) -> NewsPublic:
    created_news = await news_repo.create_news(new_news=new_news)
    return created_news
