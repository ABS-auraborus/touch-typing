import random
from mimesis import Text
from mimesis import Locale


def dif_checker(length):
    if length <= 5:
        return "EASY"
    elif length > 5 and length <= 10:
        return "MEDIUM"
    else:
        return "HARD"


def register_editor(text, text_register):
    if text_register == 0:
        new_text = text.lower()
        register = "LOWER"
    elif text_register == 1:
        new_text = text.upper()
        register = "UPPER"
    elif text_register == 2:
        new_text = text.capitalize()
        register = "CAPITALIZE"
    elif text_register == 3:
        new_chars = []
        for char in text:
            case_num = random.randint(0, 2)
            new_chars.append(register_editor(char, case_num)[0])
        new_text = "".join(new_chars)
        register = "RANDOM"
    else:
        new_text = text.lower()
        register = "LOWER"

    return new_text, register


def random_chars_generator(alphabet_list):
    chars_list_length = random.randint(1, 15)
    chars_list = []
    chars_list_difficult = dif_checker(chars_list_length)

    for i in range(chars_list_length - 1):
        chars_list.append(random.choice(alphabet_list))

    return "".join(chars_list), chars_list_difficult


def random_words_generator(language, word_reg):
    if language == "en":
        l_word = Locale.EN
    elif language == "ru":
        l_word = Locale.RU

    word_prov = Text(l_word)
    word = word_prov.word()
    word_difficult = dif_checker(len(word))
    word, word_register = register_editor(word, word_reg)

    return word, word_register, word_difficult


def random_sentences_generator(language):
    if language == "en":
        l_sent = Locale.EN
    elif language == "ru":
        l_sent = Locale.RU

    sent_prov = Text(l_sent)
    sent = sent_prov.sentence()

    return sent
