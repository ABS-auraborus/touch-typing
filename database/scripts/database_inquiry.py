import sqlite3
import database_init
import database_inrteraction

database_init.init_databases()

def get_data_json(data_type: str, table_name: str, difficult: int):
    try:
        with database_interaction.get_connection(data_type) as con:
            db_cur = con.cursor()

            db_cur.execute('''
                SELECT {data_type}, DIFFICULT
                FROM {table_name}
                WHERE DIFFICULT = ?
            ''', (difficult,))
            raw_data = db_cur.fetchall()

            data_list = [row[0] for row in raw_data]

            return {
                "language": language,
                "difficult": difficult,
                "count": len(data_list),
                "data": data_list
            }
    except sqlite3.Error as e:
        return {"status": "error", "message": "Err request: {e}"}
    