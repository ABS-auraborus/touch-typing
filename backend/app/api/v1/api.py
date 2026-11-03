from fastapi import APIRouter
from backend.app.api.v1.endpoints import endpoints

api_router = APIRouter()

api_router.include_router(endpoints.router, tags = ["Endpoints"])