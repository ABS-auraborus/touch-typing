from fastapi import APIRouter
import sqlite3
import os
import json
import database_interaction
import database_init
import database_inquiry
import validator

router = APIRouter()

database_init.init_databases()

@router.get("/data?type={data_type}&lang={language}&diff={difficult}")
def get_json(data_type: str, language: str, difficult: int):
    data_type = data_type.strip().upper()
    language = language.strip().upper()

    if language in ["RUS", "ENG"] and data_type in ["SENTENCES", "WORDS", "CHARS"] and difficult in [0, 1, 2]:
        table_name = f"{language}_{data_type}"
        naming_db = f"{data_type}.db"
    else:
        return {"status": "error", "message": "inv data"}

    return database_inquiry.get_data_json(data_type, table_name, difficult)

@router.post("/auth/login")
def logging_in(login: str, password: str):
    data_by_login = database_inquiry.get_user(login)

    if not data_by_login:
        raise HTTPException(status_code=400, detail="Unexpected login or password")

    login_db = data_by_login["login"]
    salt_db = data_by_login["salt"]
    hashed_password = data_by_login["hashed_password"]
    valid_checker = validator.verify_password(password, hashed_password, salt_db)
        
    if not valid_checker:
        raise HTTPException(status_code=400, detail="Unexpected login or password")

    return {"status": "success", "message": "Logged in"}
