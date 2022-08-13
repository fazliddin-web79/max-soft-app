import React from "react";
import Avatar from "../../Components/Avatar";
import { Container } from "./style";
import picture from "../../Assets/img/picture.jpg";
import { useSelector } from "react-redux";

const Help = () => {
  const darkMode = useSelector((store) => store.user.darkMode);

  return (
    <Container darkMode={darkMode}>
      <Avatar img={picture} width={"120px"} />
      <h1>
        Assalomu alaykum Men <span> Fazliddin Yakubjonov </span> Frontend React
        Js Developer
      </h1>
      <h1>
        Men Dasturlash sohasi bilan <span>2</span> yildan ko'proq birgaman
      </h1>
      <h1>
        Bu vaqt davomida <span>JavaScript</span> hamda <span>TypeScript</span>{" "}
        dasturlash tillarini o'rgandim va <span>C++</span>, <span>Python</span>{" "}
        dasturlash tillari asoslarini o'rgandim
      </h1>
      <hr />
      <h1>O'quv markazlarim</h1>
      <h1>
        Frontend Asoslarini <span>Mohirdev</span> online platformasida{" "}
        <span>Mentor: Muhammadjavohir Sur'atov</span>dan,
      </h1>
      <h1>
        React Js ni esa <span>WebBrain</span> academyda{" "}
        <span>Mentor: Sardorbek Muhtorov</span>
        dan o'rgandim
      </h1>
      <hr />
      <h1>Soft Skillarim</h1>
      <ol>
        <li>Jamoa bilan chiqishib ketish</li>
        <li>Jamoani boshqarish</li>
        <li>Muammoga tez yechim topish</li>
      </ol>
      <hr />
      <h1>Bu Loyiha haqida qisqacha</h1>
      <h1>Ishlatilgan texnologiyalar</h1>
      <ol>
        <li>React</li>
        <li>React-Router-Dom </li>
        <li>Redux / Redux-Toolkit</li>
        <li>Antd design</li>
        <li>Styled-Components</li>
        <li>Google Firebase</li>
      </ol>
      <hr />
      <h1> Berilgan muddad 5 kun , Berilgan shartlar quyida</h1>
      <ol>
        <li>
          Berilgan shablondan foydalanib Websahifaning desktop, tablet va mobile
          holatlarini yaratish
        </li>
        <li>
          Google FireBase yoki WebSocket bilan loyihaning messages bo'limini
          yaratish
        </li>
      </ol>
    </Container>
  );
};

export default Help;
