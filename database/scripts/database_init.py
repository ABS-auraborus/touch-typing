import os
import sqlite3
import database_interaction

def init_db_sentences():
    with database_interaction.get_connection("SENTENCES") as con:
        db_cur = con.cursor()

        db_cur.execute('''
        CREATE TABLE IF NOT EXISTS ENG_SENTENCES (
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
            SENTENCES TEXT UNIQUE NOT NULL,
            DIFFICULT INTEGER NOT NULL DEFAULT 0
        )
        ''')
        db_cur.execute('''
        CREATE TABLE IF NOT EXISTS RUS_SENTENCES (
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
            SENTENCES TEXT UNIQUE NOT NULL,
            DIFFICULT INTEGER NOT NULL DEFAULT 0
        )
        ''')

        db_cur.close()

def init_db_words():
    with database_interaction.get_connection("WORDS") as con:
        db_cur = con.cursor()

        db_cur.execute('''
        CREATE TABLE IF NOT EXISTS ENG_WORDS (
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
            WORDS TEXT UNIQUE NOT NULL,
            DIFFICULT INTEGER NOT NULL DEFAULT 0
        )
        ''')
        db_cur.execute('''
        CREATE TABLE IF NOT EXISTS RUS_WORDS (
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
            WORDS TEXT UNIQUE NOT NULL,
            DIFFICULT INTEGER NOT NULL DEFAULT 0
        )
        ''')

def init_db_chars():
    with database_interaction.get_connection("CHARS") as con:
        db_cur = con.cursor()

        db_cur.execute('''
        CREATE TABLE IF NOT EXISTS ENG_CHARS (
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
            CHARS TEXT UNIQUE NOT NULL,
            DIFFICULT INTEGER NOT NULL DEFAULT 0
        )
        ''')
        db_cur.execute('''
        CREATE TABLE IF NOT EXISTS RUS_CHARS (
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
            CHARS TEXT UNIQUE NOT NULL,
            DIFFICULT INTEGER NOT NULL DEFAULT 0
        )
        ''')

        db_cur.close()

def init_db_users():
    with database_interaction.get_connection("USERS") as con:
        db_cur = con.cursor()

        db_cur.execute('''
        CREATE TABLE IF NOT EXISTS USERS (
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
            LOGIN TEXT UNIQUE NOT NULL,
            SALT TEXT NOT NULL,
            HASHED_PASSWORD TEXT NOT NULL,
            CREATION_TIME TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
        ''')

        db_cur.close()

def init_databases():
    init_db_sentences()
    init_db_words()
    init_db_chars()
    init_db_users()
