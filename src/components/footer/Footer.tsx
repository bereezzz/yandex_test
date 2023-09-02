import React from 'react';
import "./footer.scss"

export default function Footer() {
  return (
   <div className='footer'>
        <div className='footer__FIO'>Березов Артем Владиславович - 2023</div>
        <div className='footer_contacts'>
            <a href='https://t.me/bereezzz'  className='contact'>telegram</a>
            <a href="https://github.com/bereezzz" className='contact'>github</a>
            <a href="https://vk.com/aptemka_4" className='contact'>vk</a>
        </div>
   </div>
  );
}

 