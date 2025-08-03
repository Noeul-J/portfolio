from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from db import SessionLocal, engine, get_db
from models import Project
from fastapi.middleware.cors import CORSMiddleware

Project.metadata.create_all(bind=engine)

app = FastAPI()

# CORS 설정 : Vue 앱이 접근할 수 있도록 허용
app.add_middleware(CORSMiddleware,
                   allow_origins=["http://localhost:5173"],
                   allow_credentials=True,
                   allow_methods=["*"],
                   allow_headers=["*"],
                   )

@app.get("/projects")
def read_projects(db: Session = Depends(get_db)):
    return db.query(Project).all()