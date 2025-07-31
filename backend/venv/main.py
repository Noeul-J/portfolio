from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS 설정 : Vue 앱이 접근할 수 있또록 허용
app.add_middleware(CORSMiddleware,allow_origins=["http://localhost:5173"],allow_credentials=True,allow_methods=["*"],allow_headers=["*"])

# 테스트용 API
@app.get("/api/test")
def test_api():
    return {"message": "Hello, World!"}