import React from 'react';
import './History.css'
import opera from '../../../../assets/historyImages/opera.jpg'
import pavelCathedral from '../../../../assets/historyImages/pavelCathedral.jpg'
import sailorWife from '../../../../assets/historyImages/sailorWife.jpg'
import vorontsovLighthouse from '../../../../assets/historyImages/lighthouse.jpg'
import RedirectButton from "../../../../components/RedirectButton/RedirectButton"

const History = () => {
    return (
        <div id="history" >
            <br></br>
            <div className="title" >
                <hr />
                <span>История</span>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className="content" style={{ maxWidth: "1500px", display: "flex", flexWrap: "wrap", justifyContent: "space-around", padding: "0 15px" , marginBottom: "20px"}}>
                <a href="" className="box" style={{ margin: "15px 15px 0 15px", flex: "1 1 320px", minWidth: "300px", maxWidth: "100%", textDecoration: "none", color: "black" }}>
                    <img src={pavelCathedral} style={{ width: "100%", height: "470px", objectFit: "cover", objectPosition: "center" }} />
                    <h2>Лютеранская церковь</h2>
                    <p>Величие веры и архитектурное великолепие.
                        Кафедральный собор святого Павла в Одессе является не только религиозным центром, но и символом исторического и культурного наследия города, восхищающим посетителей своей величественностью и уникальной архитектурой.
                    </p>
                </a>
                <a href="" className="box" style={{ margin: "15px 15px 0 15px", flex: "1 1 320px", minWidth: "300px", maxWidth: "100%", textDecoration: "none", color: "black" }}>
                    <img src={sailorWife} style={{ width: "100%", height: "470px", objectFit: "cover", objectPosition: "top" }} />
                    <h2>Памятник жене моряка</h2>
                    <p>Трогательная история любви, запечатленная в бронзе.
                        Эта великолепная скульптура символизирует преданность и силу женщины, ожидающей возвращения моряка.
                        Загляните в глаза этой статуи и почувствуйте магию и эмоциональную привязанность, которые она передает.

                    </p>
                </a>
                <a href="" className="box" style={{ margin: "15px 15px 0 15px", flex: "1 1 320px", minWidth: "300px", maxWidth: "100%", textDecoration: "none", color: "black" }}>
                    <img src={vorontsovLighthouse} style={{ width: "100%", height: "470px", objectFit: "cover", objectPosition: "top" }} />
                    <h2>Воронцовский маяк</h2>
                    <p>Исторический символ и морская достопримечательность. Этот маяк, построенный в 19 веке, предоставляет незабываемый вид на Чёрное море.
                        Он служит ориентиром для мореплавателей и вдохновляет посетителей своей красотой и романтикой морской атмосферы.

                    </p>
                </a>
                <a href="" className="box" style={{margin: "15px 15px 0 15px", flex: "1 1 320px", minWidth: "300px", maxWidth: "100%", textDecoration: "none", color: "black" }}>
                    <img src={opera} style={{ width: "100%", height: "470px", objectFit: "cover", objectPosition: "center" }} />
                    <h2>Театральный сад</h2>
                    <p>Уникальная оазисная зелень в центре города. Этот прекрасный парк является местом отдыха и культурных мероприятий.
                        Здесь можно прогуляться среди красивых фонтанов, насладиться театральными представлениями и настроиться на волну искусства.
                    </p>
                </a>
            </div>
            <p style={{ textAlign: "center" }}>
                <RedirectButton to="/history">Смотреть все фото (10)</RedirectButton>
            </p>
        </div>
    )
}

export default History;