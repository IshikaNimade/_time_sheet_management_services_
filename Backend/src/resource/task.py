import pandas as pd
from src.repository.db import task
from bson.objectid import ObjectId
from src.schemas.user import userEntity, usersEntity

def get_all_task_sheet():
    return usersEntity(task.find())

async def create_task(excel_file):
    contents = excel_file.file.read()
    df = pd.read_excel(contents)
    document = df.to_dict(orient="records")
    task.insert_many(document)


def update_task_sheet(user_id, task_update):
    task.update_one({"_id": ObjectId(user_id)},
                    {"$set": {"use_name": task_update.user_name, "task": task_update.task,
                              "start_date": task_update.start_date, "end_date": task_update.end_date}})
    return userEntity(task.find_one({"_id": ObjectId(user_id)}))

def get_task_sheet_by_id(user_id, start_date, end_date):
    return userEntity(task.find_one({"_id": ObjectId(user_id)}))

