import sqlite3

from backend.app.core import database_interaction
from backend.app.crud import database_inquiry

def insert_achievements(user: str):
    user_id = database_inquiry.get_id("USERS", "USERS", "LOGIN", user)

    try:
        with database_interaction.get_connection("USERS") as con:
            db_cur = con.cursor()

            db_cur.execute('''
                INSERT INTO USER_ACHIEVEMENTS (USER_ID, ACHIEVEMENT_ID, CURRENT_VALUE, IS_UNLOCKED)
                SELECT ?, ID, 0, 0
                FROM ACHIEVEMENTS
            ''', (user_id,))

            con.commit()

            db_cur.close()

        return 1
    except sqlite3.Error as e:
        print(f"Err: unexpected login: {e}")
        return None

def achievement_counter(user: str, achievement: str):
    user = user.strip()
    achievement = achievement.strip()

    user_id = database_inquiry.get_id("USERS", "USERS", "LOGIN", user)
    achievement_id = database_inquiry.get_id("USERS", "ACHIEVEMENTS", "NAME", achievement)

    if not user_id or not achievement_id:
        return None

    try:
        with database_interaction.get_connection("USERS") as con:
            db_cur = con.cursor()

            db_cur.execute('''
                UPDATE USER_ACHIEVEMENTS
                SET CURRENT_VALUE = CURRENT_VALUE + 1
                WHERE USER_ID = ?
                AND ACHIEVEMENT_ID = ?
            ''', (user_id, achievement_id))

            con.commit()

            db_cur.close()

        return 1
    except sqlite3.Error as e:
        print(f"Err: cant boost value: {e}")
        return None