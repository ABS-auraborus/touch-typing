import sqlite3

DB_NAME = "WORDS.db"

def get_connection():
    db_con = sqlite3.connect("WORDS.db")
    db_con.execute("PRAGMA foreign_keys = ON;")
    return db_con

def init_db():
    with get_connection() as con:
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

def new_rus_word(words: str, register: str, difficult: str):
    try:
        with get_connection() as con:
            db_cur = con.cursor()

            db_cur.execute('''
                INSERT INTO RUS_WORDS (WORDS, REGISTER, DIFFICULT)
                VALUES (?, ?, ?)
            ''', (words, register, difficult))

            print(f"Sucs: Added - {words}, Reg - {register}, Dif - {difficult}")

            db_cur.close()
    except sqlite3.IntegrityError:
        print(f"Err")

def new_eng_word(words: str, register: str, difficult: str):
    try:
        with get_connection() as con:
            db_cur = con.cursor()

            db_cur.execute('''
                INSERT INTO ENG_WORDS (WORDS, REGISTER, DIFFICULT)
                VALUES (?, ?, ?)
            ''', (words, register, difficult))

            print(f"Sucs: Added - {words}, Reg - {register}, Dif - {difficult}")

            db_cur.close()
    except sqlite3.IntegrityError:
        print(f"Err")

if __name__ == "__main__":
    init_db()