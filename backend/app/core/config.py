from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "FastAPI React Vite App"
    DATABASE_URL: str = "sqlite:///./backend/data/app.db"

    class Config:
        env_file = ".env"

settings = Settings()
