import sqlite3
import database_init
import database_interaction

database_init.init_databases()

def new_sentence(sentence: str, language: str):
    language = language.strip().upper()
    
    try:
        with database_inrteraction.get_connection() as con:
            db_cur = con.cursor()

            db_cur.execute('''
                INSERT INTO {language}_SENTENCES (SENTENCES)
                VALUES (?)
            ''', (sentence,))

            db_cur.close()
    except sqlite3.IntegrityError as e:
        print(f"Add sentence err: {e}")


def new_words(words: str, language: str, difficult: int):
    language = language.strip().upper()

    try:
        with database_inrteraction.get_connection() as con:
            db_cur = con.cursor()

            db_cur.execute('''
                INSERT INTO {language}_WORDS (WORDS, DIFFICULT)
                VALUES (?, ?)
            ''', (words, difficult))

            db_cur.close()
    except sqlite3.IntegrityError:
        print(f"Add word err: {e}")

def new_chars(chars: str, language: str, difficult: int):
    language = language.strip().upper()

    try:
        with database_inrteraction.get_connection() as con:
            db_cur = con.cursor()

            db_cur.execute('''
                INSERT INTO {language}_CHARS (CHARS, DIFFICULT)
                VALUES (?, ?)
            ''', (chars, difficult))

            db_cur.close()
        except sqlite3.IntegrityError:
            print(f"Add chars err: {e}")