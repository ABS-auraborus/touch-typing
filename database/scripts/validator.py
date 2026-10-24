import crypto
import hashlib

def verify_password(password: str, hashed_password_from_db: str, salt_from_db: str):
    hashed_passford_for_check = crypto.hasher(plain_password, salt_from_db)
    
    return hashlib.compare_digest(new_hash, hashed_password_from_db)