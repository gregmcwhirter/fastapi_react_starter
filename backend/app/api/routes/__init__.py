from fastapi import APIRouter

from app.api.routes.ping import router as ping_router
from app.api.routes.news import router as news_router


router = APIRouter()

router.include_router(ping_router, prefix="/ping", tags=["ping"])
router.include_router(news_router, prefix="/news", tags=["news"])
