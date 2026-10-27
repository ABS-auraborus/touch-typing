from fastapi import APIRouter, HTTPException, status
import sqlite3
import os
import json

from backend.app.core import database_interaction
from backend.scripts import database_init
from backend.app.crud import database_inquiry
from backend.app.services import validator
from backend.scripts import database_add
from backend.app.core import crypto
from backend.app.schemas.user_schema import UserDataSchema

router = APIRouter()

database_init.init_databases()

@router.get("/data")
def get_json(data_type: str, language: str, difficult: int = 0):
    data_type = data_type.strip().upper()
    language = language.strip().upper()

    if language in ["RUS", "ENG"] and data_type in ["SENTENCES", "WORDS", "CHARS"] and difficult in [0, 1, 2]:
        table_name = f"{language}_{data_type}"
        naming_db = f"{data_type}.db"
    else:
        return {"status": "error", "message": "inv data"}

    return database_inquiry.get_data_json(data_type, table_name, language, difficult)

@router.post("/auth/registration")
def registration(user_data: UserDataSchema):
    try:
        salt = crypto.make_salt()
        database_add.new_user(user_data.login, salt, user_data.password)

        return {"status": "success", "message": "registered"}
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Cant reg. Error: {str(e)}"
        )


@router.post("/auth/login")
def logging_in(user_data: UserDataSchema):
    try:
        data_by_login = database_inquiry.get_user(user_data.login)

        if not data_by_login:
            raise HTTPException(status_code=400, detail="Unexpected login or password")

        login_db = data_by_login["login"]
        salt_db = data_by_login["salt"]
        hashed_password = data_by_login["hashed_password"]
        valid_checker = validator.verify_password(user_data.password, hashed_password, salt_db)
        
        if not valid_checker:
            raise HTTPException(status_code=400, detail="Unexpected login or password")

        return {"status": "success", "message": "Logged in"}
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Cant log. Error: {str(e)}"
        )
    except HTTPException as e:
        raise e