from pydantic import BaseModel


class Task(BaseModel):
    user_id: str
    user_name: str
    task: str
    description: str
    start_date: str
    end_date: str

