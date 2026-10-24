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
    path = ""
    if language in ["RUS", "ENG"] and data_type in ["SENTENCES", "WORDS", "CHARS"] and difficult in [0, 1, 2]:
        table_name = f"{language}_{data_type}"
        naming_db = f"{data_type}.db"
    else:
        return {"status": "error", "message": "inv data"}

    try:
        with database_interaction.get_connection(data_type) as con:
            db_cur = con.cursor()

            db_cur.execute('''
                SELECT {type}, DIFFICULT
                FROM {table_name}
                WHERE DIFFICULT = ?
            ''', (difficult,))
            raw_data = db_cur.fetchall()

            data_list = [row[0] for row in raw_data]

            return {
                "language": language,
                "difficult": difficult,
                "count": len(data_list),
                "data": data_list
            }
    except sqlite3.Error as e:
        return {"status": "error", "message": "Err request: {e}"}

@router.post("/auth/login"):
