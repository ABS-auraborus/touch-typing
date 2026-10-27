import hmac
import os

from backend.app.core import crypto

def verify_password(password: str, hashed_password: str, salt_db: str):
    new_hash = crypto.hasher(password, salt_db)
    
    return hmac.compare_digest(new_hash, hashed_password)