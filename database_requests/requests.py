import database_chars_requests as dcr 
import json

dcr.init_db()

def get_chars_json():
	result_data = {
		"ENG":
		{
			"EASY": [],
			"MEDIUM": [],
			"HARD": []
		}
	}
get_chars()