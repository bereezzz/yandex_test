import React from 'react';

import "./AboutMe.scss"
export default function AboutMe() {
    return (
        <div className='aboutMe'>
            <div className='aboutMe__text'>
                <div className='aboutMe__text--header'>Привет, я Артем Березов, разработчик на React.</div>
                <div className='aboutMe__text--main'>Моя основная область экспертизы - разработка на React. 
                Я увлекаюсь созданием интерактивных пользовательских интерфейсов и веб-приложений.
                Мое приложение React предоставляет пользователю богатый и современный опыт взаимодействия
                 с данными и функциональностью.
                    с оттенком мрачного сюрреализма в персонажах и постановке.</div>
                <div className='aboutMe__text--main'>Сейчас я магистрант кафедры САПРиПК в Волгограде
                 ⏤ в настоящее время работаю в лаборатории бизнес аналитики и ищу новые вызовы!</div>
            </div>

            <img src='./ava2.jpg' className='aboutMe__img'></img>


        </div>
    );
}


