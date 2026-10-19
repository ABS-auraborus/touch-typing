from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
from cryptography.hazmat.primitives import hashes
from cryptography.fernet import Fernet
import os
import base64

def make_salt():
    salt_b = os.urandom(16)
    salt_s = base64.b64encode(salt_b).decode('utf-8')
    return salt_s

def de_salt(salt_str: str):
    salted_bytes_back = base64.b64decode(salt_str.encode('utf-8'))
    return salted_bytes_back

def fernet(master_key: str, salt_str: str):
    master_key = master_key.encode('utf-8')
    salt = de_salt(salt_str)
    kdf = PBKDF2HMAC(
        algorithm = hashes.SHA256(),
        length = 32,
        salt = salt,
        iterations = 100000,
    )

    key = kdf.derive(master_key)
    f_key = base64.urlsafe_b64encode(key)

    return Fernet(f_key)