from app.db.repositories.base import BaseRepository
from app.models.news import NewsCreate, NewsUpdate, NewsInDB


CREATE_NEWS_QUERY = """
    INSERT INTO newss (name, description, price, news_type)
    VALUES (:name, :description, :price, :news_type)
    RETURNING id, name, description, price, news_type;
"""

class NewsRepository(BaseRepository):
    """"
    All database actions associated with the News resource
    """
    async def create_news(self, *, new_news: NewsCreate) -> NewsInDB:
        query_values = new_news.dict()
        news = await self.db.fetch_one(query=CREATE_NEWS_QUERY, values=query_values)
        return NewsInDB(**news)
