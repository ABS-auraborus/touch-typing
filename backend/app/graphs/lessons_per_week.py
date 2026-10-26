import plotly.express as px
import pandas as pd
from fastapi import APIRouter
from fastapi.responses import HTMLResponse

router = APIRouter()
@router.get("/graphs/lessons-per-week", response_class=HTMLResponse)
def lessons_per_week():
    data = {
        "col": ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"],
        "col1": [1, 2, 3, 4, 5, 6, 7],
    }
    df = pd.DataFrame(data=data)

    fig = px.bar(x=df["col"], y=df["col1"], template="plotly_dark")
    fig.update_layout(
        xaxis_title="Дни",
        yaxis_title="Задачи",
        autosize=True,
        margin={"l": 40, "r": 10, "t": 10, "b": 40},
        paper_bgcolor="rgba(0,0,0,0)",
        plot_bgcolor="rgba(0,0,0,0)",
    )
    fig.update_xaxes(gridcolor="rgba(255,255,255,0.15)", showgrid=True)
    fig.update_yaxes(gridcolor="rgba(255,255,255,0.15)", showgrid=True)

    return fig.to_html(include_plotlyjs="cdn", config={"displayModeBar": False})

