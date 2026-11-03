import sqlite3

from backend.app.core import database_interaction

def insert_achievements(user: str):
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

    try:
        with database_interaction.get_connection("USERS") as con:
            db_cur = con.cursor()

            db_cur.execute('''
                UPDATE USER_ACHIEVEMENTS
                SET CURRENT_VALUE = CURRENT_VALUE + 1
                WHERE USER_ID = (
                    SELECT ID FROM USERS WHERE LOGIN = ?
                ) 
                AND ACHIEVEMENT_ID = (
                    SELECT ID FROM ACHIEVEMENTS WHERE NAME = ?
                )
            ''', (user, achievement))

            con.commit()

            db_cur.close()

        return 1
    except sqlite3.Error as e:
        print(f"Err: cant boost value: {e}")
        return None