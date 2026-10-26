from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
from cryptography.hazmat.primitives import hashes
import os
import base64
import hashlib

def make_salt():
    return base64.b64encode(os.urandom(16)).decode('utf-8')

def bytes_of_salt(salt: str):
    return base64.b64decode(salt.encode('utf-8'))

def hasher(password: str, salt: str):
    password_bytes = password.encode('utf-8')
    salted_bytes = bytes_of_salt(salt)

    kdf = PBKDF2HMAC(
        algorithm = hashes.SHA256(),
        length = 32,
        salt = salted_bytes,
        iterations = 100000,
    )

    raw_hash = kdf.derive(password_bytes)

    return base64.b64encode(raw_hash).decode('utf-8')
