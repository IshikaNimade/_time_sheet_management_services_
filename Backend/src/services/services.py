from fastapi import APIRouter, File, UploadFile
from src.models.user import Task
from src.repository.db import task
import pandas as pd
from src.resource.task import get_all_task_sheet,update_task_sheet,get_task_sheet_by_id


user = APIRouter()


@user.get('/get_all_task_sheet/')
async def get_task_sheet():
    return get_all_task_sheet()


@user.post("/upload_task_sheet/")
async def create_task_sheet(excel_file: UploadFile = File(...)):
    contents = excel_file.file.read()
    df = pd.read_excel(contents)
    document = df.to_dict(orient="records")
    task.insert_many(document)


@user.put('/{id}')
async def update_task(id, task_update_request: Task):
    return update_task_sheet(id,task_update_request)


@user.get('/{user_id}')
async def get_task(id, start_date_: int = 0, end_date_: int = 10):
        return get_task_sheet_by_id(id,start_date_,end_date_)
