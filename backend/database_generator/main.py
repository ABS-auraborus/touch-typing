import backend.database_generator.database_chars as db_c
import backend.database_generator.database_words as db_w
import backend.database_generator.database_sentences as db_s
import string
import backend.database_generator.generator as generator

db_c.init_db()
db_w.init_db()
db_s.init_db()


def main():
    eng_chars = list(string.punctuation + string.ascii_letters)
    rus_chars = list(
        string.punctuation
        + "АаБбВвГгДдЕеЁёЖжЗзИиЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчЬьЫыЪъЭэЮюЯя"
    )

    for i in range(200):
        chars_list, chars_difficult = generator.random_chars_generator(rus_chars)
        word, word_register, word_difficult = generator.random_words_generator("ru", 3)
        sentence = generator.random_sentences_generator("ru")
        db_c.new_rus_chars_list(chars_list, chars_difficult)
        db_w.new_rus_word(word, word_register, word_difficult)
        db_s.new_rus_sentence(sentence)

    for i in range(200):
        chars_list, chars_difficult = generator.random_chars_generator(eng_chars)
        word, word_register, word_difficult = generator.random_words_generator("en", 3)
        sentence = generator.random_sentences_generator("en")
        db_c.new_eng_chars_list(chars_list, chars_difficult)
        db_w.new_eng_word(word, word_register, word_difficult)
        db_s.new_eng_sentence(sentence)


if __name__ == "__main__":
    main()
