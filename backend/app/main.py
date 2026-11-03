from fastapi import FastAPI
from backend.app.api.v1.api import api_router

app = FastAPI(
    title="Touch Typing App",
    version="1.0.0",
    description="Backend for touch typing training platform",
)

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]

app.include_router(api_router, prefix="/api/v1")

@app.get("/")
def root():
  return {"status": "ok", "message": "Touch Typing API is running successfully!"}