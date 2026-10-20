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

def init_db_words():
    with get_connection(DB_PATH_WORD) as con:
        db_cur = con.cursor()

        db_cur.execute('''
        CREATE TABLE IF NOT EXISTS ENG_WORDS (
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
            WORDS TEXT UNIQUE NOT NULL,
            REGISTER TEXT NOT NULL,
            DIFFICULT TEXT NOT NULL
        )
        ''')
        db_cur.execute('''
        CREATE TABLE IF NOT EXISTS RUS_WORDS (
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
            WORDS TEXT UNIQUE NOT NULL,
            REGISTER TEXT NOT NULL,
            DIFFICULT TEXT NOT NULL
        )
        ''')

        db_cur.close()

@router.get("/chars/{language}/{difficult}"):
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
            raw_data = db_cur.fetchall()

            chars_list = [row[0] for row in raw_data]

            return {
                "language": language,
                "difficult": difficult,
                "count": len(chars_list),
                "chars": chars_list
            }
    except sqlite3.Error as e:
        return {"status": "error", "message": "bad db {e}"}

@router.get("/words/{language}/{difficult}"):
def get_words_by_url(language: str, difficult: str):
    language = language.strip()
    difficult = difficult.strip()

    if(language == "ENG"):
        table_name = "ENG_WORDS"
    elif(language == "RUS"):
        table_name = "RUS_WORDS"
    else:
        return {"status": "error", "message": "uk language"}

    try:
        with get_connection(DB_PATH_WORD) as con:
            db_cur = con.cursor()

            db_cur.execute('''
                SELECT WORDS, DIFFICULT
                FROM {table_name}
                WHERE DIFFICULT = ?
            ''', (difficult,))
            raw_data = db_cur.fetchall()

            words_list = [row[0] for row in raw_data]

            return {
                "language": language,
                "difficult": difficult,
                "count": len(chars_list),
                "words": words_list
            }
    except sqlite3.Error as e:
        return {"status": "error", "message": "bad db {e}"}

if __name__ == "__main__":
    init_db_chars()