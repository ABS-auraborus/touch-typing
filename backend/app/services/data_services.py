def route_data_verifire(language: str, data_type: str, difficult: int):
    if(
        language in ["RUS", "ENG"]
        and data_type in ["SENTENCES", "WORDS", "CHARS"]
        and difficult in [0, 1, 2]
    ):
        return 1
    return 0