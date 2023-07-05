import React from "react";
import "./BackToTopButton.css"
import $ from "jquery"

class BackToTopButton extends React.Component {
    componentDidMount() { 
        $('.back-to-top').click(function () {
            $('body,html').animate({ scrollTop: 0}, 100); // 800 - Скорость анимации
        });
        
        $(window).scroll(function() { // Отслеживаем начало прокрутки
            let scrolled = $(window).scrollTop(); // Вычисляем сколько было прокручено.
        
            if(scrolled > 350) { // Если высота прокрутки больше 350 - показываем кнопку
                $('.back-to-top').addClass('active');
            } else {
                $('.back-to-top').removeClass('active');
            }
        });
    }
    render() {
        return (
            <div id="back_to_top" className="back-to-top"> 
              <svg style={{transform: "rotate(270deg)", width:"30", height: "30"}} viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" /></svg>
            </div>
        )
    }
}

export default BackToTopButton;