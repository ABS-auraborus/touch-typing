import sqlite3
import os
import json
from fastapi import APIRouter

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DB_DIR = os.path.join(BASE_DIR, "..", "database")

router = APIRouter()

def get_connection(path):
    db_con = sqlite3.connect(path)
    db_con.execute("PRAGMA foreign_keys = ON;")
    return db_con

@router.get("/{data_type}/{language}/{difficult}")
def get_json(data_type: str, language: str, difficult: str):
    data_type = data_type.strip().upper()
    language = language.strip().upper()
    difficult = difficult.strip().upper()
    path = ""
    if language in ["RUS", "ENG"] and data_type in ["SENTENCES", "WORDS", "CHARS"]:
        table_name = f"{language}_{data_type}"
        naming_db = f"{data_type}.db"
    else:
        return {"status": "error", "message": "inv data"}
    
    DB_PATH = os.path.join(DB_DIR, naming_db)

    try:
        with get_connection(DB_PATH) as con:
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

if __name__ == "__main__":
    init_db_chars()