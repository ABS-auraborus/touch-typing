import database_chars_requests as dcr 
import json

dcr.init_db()

def get_chars():
	print(json.dumps(dcr.get_rus_chars('EASY'), f.json))

get_chars()