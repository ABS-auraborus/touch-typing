import database_init
import database_interaction
import database_add
import generator
import string
import random

database_init.init_databases()

alphabet_symb = string.punctuation + string.digits
alphabet_ru = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ' + alphabet_symb
alphabet_en = string.ascii_letters + alphabet_symb

def en_data():
    for i in range(1000):
        chars_list, chars_list_difficult = generator.random_chars_generator(alphabet_en)
        database_add.new_data('CHARS', chars_list, 'ENG', chars_list_difficult)

        word, word_difficult = generator.random_words_generator('ENG', random.randint(0, 4))
        database_add.new_data('WORDS', word, 'ENG', word_difficult)

        sentence = generator.random_sentences_generator('ENG')
        database_add.new_data('SENTENCES', sentence, 'ENG', 0)
def ru_data():
    for i in range(1000):
        chars_list, chars_list_difficult = generator.random_chars_generator(alphabet_ru)
        database_add.new_data('CHARS', chars_list, 'RUS', chars_list_difficult)

        word, word_difficult = generator.random_words_generator('RUS', random.randint(0, 4))
        database_add.new_data('WORDS', word, 'RUS', word_difficult)

        sentence = generator.random_sentences_generator('RUS')
        database_add.new_data('SENTENCES', sentence, 'RUS', 0)

en_data()
ru_data()