import sqlite3
import os
import json
import fastapi as fap

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DB_DIR = os.path.join(BASE_DIR, "..", "database")

DB_PATH_CHAR = os.path.join(DB_DIR, "CHARS.db")
DB_PATH_WORD = os.path.join(DB_DIR, "WORDS.db")
DB_PATH_SENT = os.path.join(DB_DIR, "SENTENCES.db")

router = APIRouter()

def get_connection(path):
    db_con = sqlite3.connect(path)
    db_con.execute("PRAGMA foreign_keys = ON;")
    return db_con

def init_db_chars():
    with get_connection(DB_PATH_CHAR) as con:
        db_cur = con.cursor()

        db_cur.execute('''
        CREATE TABLE IF NOT EXISTS ENG_CHARS (
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
            CHARS TEXT UNIQUE NOT NULL,
            DIFFICULT TEXT NOT NULL
        )
        ''')
        db_cur.execute('''
        CREATE TABLE IF NOT EXISTS RUS_CHARS (
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
            CHARS TEXT UNIQUE NOT NULL,
            DIFFICULT TEXT NOT NULL
        )
        ''')

        db_cur.close()

@router.get("/chars/{language}/{difficult}", response_model=CharsGet):
def get_chars_by_url(language: str, difficult: str):
    language = language.strip()
    difficult = difficult.strip()

    if(language == "ENG"):
        table_name = "ENG_CHARS"
    elif(language == "RUS"):
        table_name = "RUS_CHARS"
    else:
        return {"status": "error", "message": "uk language"}

    try:
        with get_connection(DB_PATH_CHAR) as con:
            db_cur = con.cursor()

            db_cur.execute('''
                SELECT CHARS, DIFFICULT
                FROM {table_name}
                WHERE DIFFICULT = ?
            ''', (difficult,))

if __name__ == "__main__":
    init_db_chars()
    get_all_chars()