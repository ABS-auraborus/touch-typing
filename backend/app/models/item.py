from sqlalchemy import Column, Integer, String
from backend.app.core.database import Base

class Item(Base):
    __tablename__ = "items"

    id = Column(Integer, primary_index=True, primary_key=True, index=True)
    title = Column(String, index=True, nullable=False)
    description = Column(String, nullable=True)

