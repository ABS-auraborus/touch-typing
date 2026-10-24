import sqlite3
import os
import json
import database_interaction
import database_init
from fastapi import APIRouter

router = APIRouter()

@router.get("/data?type={data_type}&lang={language}&diff={difficult}")
def get_json(data_type: str, language: str, difficult: str):
    database_init.init_databases()

    data_type = data_type.strip().upper()
    language = language.strip().upper()
    difficult = difficult.strip().upper()

    if language in ["RUS", "ENG"] and data_type in ["SENTENCES", "WORDS", "CHARS"] and difficult in [0, 1, 2]:
        table_name = f"{language}_{data_type}"
        naming_db = f"{data_type}.db"
    else:
        return {"status": "error", "message": "inv data"}

    return get_data_json(data_type, table_name, difficult)

@router.post("/auth/login")
