import { useState } from "react";
import Accordion from "./Accordion"; //импортируем компонент аккордеона
import "../styles/card.css";

//setActiveAccordionIndex - функция, которая обновляет state

const Card = ({ data }) => {
  const [activeAccordionIndex, setActiveAccordionIndex] = useState(-1); //useState возвращает массив с двумя элементами [initalState, dispatchAction], первый элемент - это начальное значение нашего стейта, а второй - это функция, которая перезаписывает наш стейт(первый аргумент)(поскольку это массив, мы его деструктурируем)
  const toggleAccordionHandle = (currentElement) => {
    //   проверяю, если индекс элемента совпадает с индексом клика, то это означает, что мы кликнули на открытый элемент
    if (currentElement === activeAccordionIndex) {
      setActiveAccordionIndex(-1); //перезаписываем состояние, на несуществующий индекс, чтобы закрыть все аккордеоны
      return; //выходим из функции
    }
    setActiveAccordionIndex(currentElement); //перезаписываем состояние, меняя индекс на элемент, на который мы кликнули
  };

  //перебираем массив объектов даты с файла Data.js и передаем данные пропсами(props) в компонент Accordion и на выходе получаем массив jsx объектов
  const accordions = data.map((el, i) => (
    <Accordion
      key={i}
      data={el}
      toggleAccordion={toggleAccordionHandle}
      id={i}
      activeIndex={activeAccordionIndex}
    />
  ));

  return (
    <div className="card-container">
      <div className="card-images">
        <div className="woman-image-block">
          <img
            className="woman-image"
            src="./images/illustration-woman-online-desktop.svg"
            alt="woman"
          />
          <img
            className="background-woman-image"
            src="./images/bg-pattern-desktop.svg"
            alt="background"
          />
        </div>
      </div>
      <img
        className="box-image"
        src="images/illustration-box-desktop.svg"
        alt="box"
      />

      <div className="faq-container">
        <p className="card-title">FAQ</p>
        <div className="accordions-list">
          {/* вставляем массив элементов списка акордеона*/}
          {accordions}
        </div>
      </div>
    </div>
  );
};

export default Card;
