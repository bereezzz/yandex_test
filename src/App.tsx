import React from 'react';
import Header from './components/header/Header';
import AboutMe from './components/aboutme/AboutMe';
import Skills from './components/skills/Skills';
import { InfoBlock } from './components/infoBlock/InfoBlock';
import Footer from './components/footer/Footer';
import VideoBlock from './components/videoBlock/VideoBlock';
import "./index.scss"
import work from "./imgs/work.png"
import school from "./imgs/school.jpeg"
import un from "./imgs/un.jpeg"

import { Element } from "react-scroll";

const json = [{
  header: "01 / Школьное время",
  subTitle: "Золотые Годы Учебы в Школе 103 г. Волгограда: Путь к Знаниям и Спорту",
  main1: "Во время моих школьных лет в школе №103 города Волгограда, я прожил удивительное время, посвятив себя учебе и активной школьной жизни. Мне всегда нравилась математика с ее загадочными числами и логическими головоломками, а также физкультура, которая дарила энергию и здоровье.",
  main2: "Мое учебное путешествие завершилось успешно, и я закончил школу с двумя четверками, чувствуя гордость за свои достижения и готовность к новым вызовам, которые ждут меня в будущем. Эти годы в школе оставили незабываемые воспоминания и стали фундаментом для моего дальнейшего образования и развития.",
  srcImg: school
},
{
  header: "02 / Университет",
  subTitle: "Университетские Годы: Путь к Знаниям и Лидерству",
  main1: "Во время моих учебных лет в Волгоградском Государственном Техническом Университете я активно учился и активно участвовал в студенческой жизни. Я был старостой моей группы, что дало мне возможность ощутить ответственность за благополучие и успех своих товарищей. Кроме того, я занимал должность профорга и заместителя председателя студенческого совета, что позволило мне влиять на организацию студенческой жизни и заботиться о благополучии студентов университета.",
  main2: "Этот период учебы в университете стал для меня временем не только получения академических знаний, но и развития лидерских навыков и участия в активной студенческой деятельности. Эти ценные опыт и навыки оказались весьма полезными и в дальнейшем в моей карьере и жизни.",
  srcImg: un
},
{
  header: "03 / Работа",
  subTitle: "Дни Труда и Достижений: Профессиональный Рост и Успехи в Карьере",
  main1: "Во время моей карьеры на рабочем месте, я уделял особое внимание своей профессиональной деятельности и развитию. Мои трудолюбие и стремление к достижению лучших результатов были настоящей основой моего успеха. На работе я старался быть активным участником команды, предоставляя свои навыки и знания в различных сферах. ",
  main2: "Программирование стало моей страстью в мире фронтенда, когда я узнал о бесконечных возможностях JavaScript для создания интерактивных веб-приложений. Работа с библиотеками и фреймворками, такими как React, позволила мне строить сложные и креативные пользовательские интерфейсы. Эта область объединяет техническое искусство с влиянием на пользователей, что делает ее захватывающей и вдохновляющей.",
  srcImg: work
}]
function App() {

  return (
    <div className='main'>
      <Header></Header>
      <Element name='section1' >
        <AboutMe></AboutMe>
      </Element>

      <Skills></Skills>


      {json.map((item, index) => {
        return (
          <Element key={index} name={`section${index + 2}`} >
            <InfoBlock header={item.header} subTitle={item.subTitle} main1={item.main1} main2={item.main2} srcImg={item.srcImg}></InfoBlock>
          </Element>)
      })}
      <Element name='section5'>
      <VideoBlock></VideoBlock>
      </Element>
    
      <Element name='section6'
      >
        
        <Footer></Footer>
      </Element>

    </div>
  );
}

export default App;
