import hashlib
import os
import sys

CURRENT_DIR = os.path.dirname(os.path.abspath(__file__))

if CURRENT_DIR not in sys.path:
    sys.path.insert(0, CURRENT_DIR)

import crypto

def verify_password(password: str, hashed_password: str, salt_db: str):
    hashed_password = crypto.hasher(password, salt_db)
    
    return hashlib.compare_digest(new_hash, hashed_password)