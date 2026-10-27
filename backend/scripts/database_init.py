import sqlite3
import os
    
from backend.app.core import database_interaction

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

        db_cur.execute('''
        CREATE TABLE IF NOT EXISTS ACHIEVEMENTS (
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
            NAME TEXT UNIQUE NOT NULL,
            DESCRIPTION TEXT NOT NULL,
            PATH TEXT NOT NULL,
            CONDITION_TYPE TEXT NOT NULL,
            CONDITION_VALUE INTEGER NOT NULL
        )
        ''')

        db_cur.execute('''
        CREATE TABLE IF NOT EXISTS USER_ACHIEVEMENTS (
            USER_ID INTEGER NOT NULL,
            ACHIEVEMENT_ID INTEGER NOT NULL,
            CURRENT_VALUE INTEGER DEFAULT 0,
            IS_UNLOCKED INTEGER DEFAULT 0,
            EARNED_TIME TIMESTAMP,
            PRIMARY KEY (USER_ID, ACHIEVEMENT_ID), 
            FOREIGN KEY (USER_ID) REFERENCES USERS(ID) ON DELETE CASCADE,
            FOREIGN KEY (ACHIEVEMENT_ID) REFERENCES ACHIEVEMENTS(ID) ON DELETE CASCADE
        )
        ''')
        
        db_cur.close()

def init_databases():
    init_db_sentences()
    init_db_words()
    init_db_chars()
    init_db_users()