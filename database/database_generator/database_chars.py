import sqlite3

DB_NAME = "CHARS.db"

def get_connection():
    db_con = sqlite3.connect("CHARS.db")
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

def new_rus_chars_list(chars: str, difficult: str):
    try:
        with get_connection() as con:
            db_cur = con.cursor()

            db_cur.execute('''
                INSERT INTO RUS_CHARS (CHARS, DIFFICULT)
                VALUES (?, ?)
            ''', (chars, difficult))

            print(f"Sucs: Chars - {chars}, Dif - {difficult}")

            db_cur.close()
    except sqlite3.IntegrityError:
        print(f"Err")

def new_eng_chars_list(chars: str, difficult: str):
    try:
        with get_connection() as con:
            db_cur = con.cursor()

            db_cur.execute('''
                INSERT INTO ENG_CHARS (CHARS, DIFFICULT)
                VALUES (?, ?)
            ''', (chars, difficult))

            print(f"Sucs: Chars - {chars}, Dif - {difficult}")

            db_cur.close()
    except sqlite3.IntegrityError:
        print(f"Err")

if __name__ == "__main__":
    init_db()