class Session():
    def __init__(self):
        self.user_id = None
        self.fernet_user = None
        self.is_active = False

    def clear(self):
        self.user_id = None
        self.fernet_user = None
        self.is_active = False