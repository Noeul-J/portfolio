from sqlalchemy import Column, Integer, String, DateTime
from datetime import datetime
from db import Base

class Project(Base):
    __tablename__ = "projects"
    
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    category = Column(String)
    description = Column(String)
    technologies = Column(String)  # JSON string으로 저장
    created_at = Column(DateTime, default=datetime.now)
    updated_at = Column(DateTime, default=datetime.now, onupdate=datetime.now) 