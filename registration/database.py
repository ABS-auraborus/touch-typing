import sqlite3

DB_NAME = "./database/users.db"

def get_connection():
    db_con = sqlite3.connect("./database/users.db")
    db_con.execute("PRAGMA foreign_keys = ON;")
    return db_con

def init_db():
    with get_connection() as con:
        db_cur = con.cursor()

        db_cur.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            salt TEXT NOT NULL,
            auth_verifier TEXT NOT NULL
        )
        ''')

        db_cur.close()

def new_user(username: str, salt: str, auth_verifier: str):
    try:
        with get_connection() as con:
            db_cur = con.cursor()

            db_cur.execute('''
                INSERT INTO users (username, salt, auth_verifier)
                VALUES (?, ?, ?)
            ''', (username, salt, auth_verifier))

            print(f"Sucs: User - {username} sucs made")

            db_cur.close()
    except sqlite3.IntegrityError:
        print(f"Err: User - {username} has already made")

def get_val(username: str):
    try:
        with get_connection() as con:
            db_cur = con.cursor()

            db_cur.execute('''
                SELECT salt, auth_verifier, id
                FROM users
                WHERE username = ?
            ''', (username,))

            user_data = db_cur.fetchone()

            db_cur.close()

            if user_data:
                return user_data[0], user_data[1], user_data[2]

            print(f"Err: User - {username} doesnt exist")
    except sqlite3.IntegrityError as e:
        print(f"DB err: {e}")



if __name__ == "__main__":
    init_db()