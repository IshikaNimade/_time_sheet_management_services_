def userEntity(item) -> dict:
    return{
        "user_id": str(item["_id"]),
        "user_name": item["name"],
        "task": item["task"],
        "start_date": item["start_date"],
        "end_date": item["end_date"]
    }
def usersEntity(entity) -> list:
    return[userEntity(item) for item in entity]
