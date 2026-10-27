import os
import sqlite3

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DB_DIR = os.path.join(BASE_DIR, "..", "..", "database")

def get_connection(data_name):
    DB_PATH = os.path.join(DB_DIR, f"{data_name.upper()}.db")
    db_con = sqlite3.connect(DB_PATH)
    db_con.execute("PRAGMA foreign_keys = ON;")
    return db_con