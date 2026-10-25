import crypto
import hashlib

def verify_password(password: str, hashed_password: str, salt_db: str):
    hashed_password = crypto.hasher(password, salt_db)
    
    return hashlib.compare_digest(new_hash, hashed_password)