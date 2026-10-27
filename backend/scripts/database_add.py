import sqlite3

from backend.app.core import database_interaction
from backend.scripts import database_init
from backend.app.core import crypto

database_init.init_databases()

def new_data(data_name: str, data: str, language: str, difficult: int):
    data_name = data_name.strip().upper()
    language = language.strip().upper()
    
    try:
        with database_interaction.get_connection(data_name) as con:
            db_cur = con.cursor()

            db_cur.execute(f'''
                INSERT INTO {language}_{data_name} ({data_name}, DIFFICULT)
                VALUES (?, ?)
            ''', (data, difficult))

            db_cur.close()
    except sqlite3.IntegrityError as e:
        print(f"Add {data_name.lower()} err: {e}")

def new_user(login: str, salt: str, password: str):
    hashed_password = crypto.hasher(password, salt)
    try:
        with database_interaction.get_connection("USERS") as con:
            db_cur = con.cursor()

            db_cur.execute('''
                INSERT INTO users (LOGIN, SALT, HASHED_PASSWORD)
                VALUES (?, ?, ?)
            ''', (login, salt, hashed_password))

            db_cur.close()
    except sqlite3.IntegrityError as e:
        print(f"Add user err: {e}")