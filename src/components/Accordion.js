import "../styles/accordion.css";

const Accordion = ({ data, toggleAccordion, id, activeIndex }) => {
  //в аргументах деструктурируем объект props

  const { question, answer } = data;
  const isCurrentElement = id === activeIndex;
  const showAnswer = isCurrentElement ? <p className={`accordion-answer ${isCurrentElement ? "open" : ""}`}>{answer}</p> : "";
  const addReverseClass = isCurrentElement ? "down" : ""; //"down" это класс, который добавляется на элемент, на который кликнул пользователь
  const addBold = isCurrentElement ? "bold" : ""; 
  const accordionUnderline = isCurrentElement ? "underline-open" : ""; 

  return (
    <div className="accordion-block">
      <div
        className="accordion-item-container"
        onClick={() => toggleAccordion(id)}
      >
        <p className={`accordion-question ${addBold}`}>{question}</p>
        <img
          src="/images/icon-arrow-down.svg"
          alt="arrow"
          className={`arrow ${addReverseClass}`}
        />
      </div>
      {showAnswer}
      <div className={`accordion-underline ${accordionUnderline}`}></div>
    </div>
  );
};

export default Accordion;
