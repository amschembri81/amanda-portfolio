import asyncio
import pandas as pd
from fastapi import FastAPI, WebSocket, WebSocketDisconnect, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
import uvicorn

app = FastAPI()
templates = Jinja2Templates(directory="templates")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DATA_PATH = "cleaned_clickstream.csv"
df = pd.read_csv(DATA_PATH)

@app.websocket("/ws/stream")
async def stream_data(websocket: WebSocket):
    await websocket.accept()
    print("WebSocket connected")

    try:
        for _, row in df.iterrows():
            data = row.where(pd.notnull(row), None).to_dict()
            try:
                await websocket.send_json(data)
            except WebSocketDisconnect:
                print("WebSocket disconnected during send")
                break
            await asyncio.sleep(1)

    except Exception as e:
        print(f"Unexpected error during WebSocket stream: {e}")

    finally:
        print("WebSocket connection closed (server-side)")
        try:
            await websocket.close()
        except RuntimeError:
            # If already closed
            pass

@app.get("/")
def read_root():
    return HTMLResponse("<h2>WebSocket server is running. Connect via /ws/stream</h2>")

@app.get("/view")
def view_page(request: Request):
    return templates.TemplateResponse("view.html", {"request": request})

if __name__ == "__main__":
    uvicorn.run("realtime_stream_server:app", host="0.0.0.0", port=8000, reload=True)
