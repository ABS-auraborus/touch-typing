from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.app.api.v1.api import api_router
from backend.app.core.database import engine, Base
from app.graphs.lessons_per_week import router as lessons_router


Base.metadata.create_all(bind=engine)

app = FastAPI(title="FastAPI + React Vite Starter API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router, prefix="/api/v1")
app.include_router(lessons_router)
@app.get("/")
def read_root():
    return {"message": "FastAPI backend is running"}
