import React from 'react';

import "./skills.scss"
export default function Skills() {
    return (
        <>
        <div className='skills'>
            <div className='skills__block'>
                <div className='skills__type'>Hard skills</div>
                <div className='skills__list'>JS, React, TS, Redux, npm, Figma, Axios, MUI, AntD, Unit tests, Sass, Flexbox, CSS Grid, БЭМ </div>
            </div>
            <div className='skills__block'>
                <div className='skills__type'>Soft skills</div>
                <div className='skills__list'>Коммуникация, cамостоятельность, работа в команде, управление стрессом, аналитическое мышление </div>
            </div>
          
        </div>
        <hr style={{marginBottom:"128px"}}></hr>
        </>
    );
}


