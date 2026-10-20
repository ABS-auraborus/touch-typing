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
    with get_connection() as con:
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

def get_all_chars():
    result_chars_data = {
        "ENG":
        {
            "EASY": [],
            "MEDIUM": [],
            "HARD": []
        },
        "RUS":
        {
            "EASY": [],
            "MEDIUM": [],
            "HARD": []
        }

    }
    try:
        with get_connection() as con:
            db_cur = con.cursor()

            db_cur.execute('''
                SELECT CHARS, DIFFICULT
                FROM ENG_CHARS
            ''')

            chars_eng_dates = db_cur.fetchall()
            
            for chars, difficult in chars_eng_dates:
                diff_key = difficult.strip()
                if(diff_key in result_chars_data["ENG"]):
                    result_chars_data['ENG'][diff_key].append(chars)

            db_cur.execute('''
                SELECT CHARS, DIFFICULT
                FROM RUS_CHARS
            ''')

            chars_rus_dates = db_cur.fetchall()
            
            for chars, difficult in chars_rus_dates:
                diff_key = difficult.strip()
                if(diff_key in result_chars_data["RUS"]):
                    result_chars_data['RUS'][diff_key].append(chars)

            db_cur.close()

            json_chars_output = json.dumps(result_chars_data, ensure_ascii = False, indent = 2)

            with open("chars.json", "w", encoding = "utf-8") as out:
                out.write(json_chars_output)

            return json_chars_output
        
    except sqlite3.Error as e:
        print(f"Err: {e}")
        return Null

if __name__ == "__main__":
    init_db()
    get_all_chars()