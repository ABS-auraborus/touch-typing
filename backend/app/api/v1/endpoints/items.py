from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from backend.app.core.database import get_db
from backend.app.schemas.item import Item, ItemCreate
from backend.app.crud import crud_item

router = APIRouter()

@router.get("/", response_model=List[Item])
def read_items(db: Session = Depends(get_db)):
    return crud_item.get_items(db)

@router.post("/", response_model=Item)
def create_item(item: ItemCreate, db: Session = Depends(get_db)):
    return crud_item.create_item(db, item)
