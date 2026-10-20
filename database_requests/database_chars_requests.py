import sqlite3
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DB_DIR = os.path.join(BASE_DIR, "..", "database")
DB_PATH =os.path.join(DB_DIR, "CHARS.db")

def get_connection():
    db_con = sqlite3.connect(DB_PATH)
    db_con.execute("PRAGMA foreign_keys = ON;")
    return db_con

def init_db():
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

def get_eng_chars(difficult: str):
    try:
        with get_connection() as con:
            db_cur = con.cursor()

            db_cur.execute('''
                SELECT CHARS, DIFFICULT
                FROM ENG_CHARS
                WHERE DIFFICULT = ?
                ''', (difficult,))

            user_dates = db_cur.fetchall()
            
            db_cur.close()

            return user_dates[0], user_dates[1]
    except sqlite3.Error as e:
        print(f"Err: {e}")

def get_rus_chars(difficult: str):
    try:
        with get_connection() as con:
            db_cur = con.cursor()

            db_cur.execute('''
                SELECT CHARS, DIFFICULT
                FROM RUS_CHARS
                WHERE DIFFICULT = ?
                ''', (difficult,))

            chars_dates = db_cur.fetchall()
            
            db_cur.close()

            return chars_dates
    except sqlite3.Error as e:
        print(f"Err: {e}")

if __name__ == "__main__":
    init_db()