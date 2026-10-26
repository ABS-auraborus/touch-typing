import hashlib
import os

from . import crypto

def verify_password(password: str, hashed_password: str, salt_db: str):
    new_hash = crypto.hasher(password, salt_db)
    
    return hashlib.compare_digest(new_hash, hashed_password)