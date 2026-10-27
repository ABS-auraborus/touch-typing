from fastapi import APIRouter
from backend.app.api.v1.endpoints import items
from backend.app.services.requests import router as training_router

api_router = APIRouter()
api_router.include_router(items.router, prefix="/items", tags=["items"])
api_router.include_router(training_router, tags=["training"])
