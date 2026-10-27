from pydantic import BaseModel

class UserDataSchema(BaseModel):
    login: str
    password: str