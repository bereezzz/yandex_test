import React from 'react';
import "./videoBlock.scss"

export default function VideoBlock() {
    return (
        <>
            <div className='videoBlock'>
                <div className='videoBlock__header' style={{ width: "100%", display: "flex", justifyContent: "start", marginBottom: "32px" }}>04 / Минутка полезной информации</div>
                <div className='videoBlock__subtitle' style={{ width: "100%", display: "flex", justifyContent: "start", marginBottom: "32px" }}>Спасение дизайнерской эпохи: CSS Flexbox как герой равномерного макета</div>
                <div className='videoBlock__text' style={{ width: "100%", display: "flex", justifyContent: "start", marginBottom: "32px", flexDirection:"column", gap:"12px" }}>В далеких и забытых временах веб-дизайна, борьба за равномерное распределение элементов на веб-странице была чрезвычайно сложной задачей. Вертикальные выравнивания капризно скакали, а горизонтальное пространство было всегда в центре внимания. Это была эпоха, когда CSS Flexbox не существовал.
                    <p>Затем на сцену вступил CSS Flexbox, как герой,
                         способный прийти на помощь, когда другие стили не могли справиться.
                          Самый главный инструмент этого героя - это контейнер, который, став display: flex;,
                           готов организовать своих детей. Он говорит им: "Не бойтесь, я распределю вас равномерно
                            и красиво!"</p>
                    <p>Когда дело доходит до направления, Flexbox предлагает два варианта:
                         горизонтальное или вертикальное. С помощью flex-direction контейнер решает,
                          какой маршрут дети должны выбрать.</p>
                    <p>Подобно магии, свойства justify-content и align-items позволяют детям вписать себя в
                         контейнер, будь они велики или малы. Ведь даже в мире веб-дизайна, где размер имеет
                          значение, каждый элемент имеет свою роль.</p>
                </div>
                <video width="80%" height="80%" controls style={{ paddingBottom: "128px" }}>
                    <source src="./gotovo.mp4" type="video/mp4" />
                    Ваш браузер не поддерживает видео в формате MOV.
                </video>

            </div>
            <hr style={{ marginBottom: "128px" }}></hr>
        </>
    );
}

