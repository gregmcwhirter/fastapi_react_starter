from typing import Optional
from enum import Enum

from app.models.core import IDModelMixin, CoreModel


class NewsType(str, Enum):
    dust_up = "dust_up"
    spot_clean = "spot_clean"
    full_clean = "full_clean"

class NewsBase(CoreModel):
    """
    All common characteristics of our News resource
    """
    # Optional type declaration to specify that any attribute not passed in when creating 
    # the model instance will be set to None
    name: Optional[str]
    description: Optional[str]
    price: Optional[float]
    news_type: Optional[NewsType] = "spot_clean"

class NewsCreate(NewsBase):
    name: str
    price: float

class NewsUpdate(NewsBase):
    news_type: Optional[NewsType]

class NewsInDB(IDModelMixin, NewsBase):
    name: str
    price: float
    news_type: NewsType

class NewsPublic(IDModelMixin, NewsBase):
    pass
