import "../styles/accordion.css"

const Accordion = ({data, toggleAccordion, id, activeIndex}) => {//в аргументах деструктурируем объект props
  
const {question, answer} = data; 
const isCurrentElement = id === activeIndex; 
const showAnswer = isCurrentElement ? <p>{answer}</p> : ""; 
const addReverseClass = isCurrentElement ? "down" : ""; //"down" это класс, который добавляется на элемент, на который кликнул пользователь
   
        return (
            <>
        <div className="accordion-item-container" onClick={() => toggleAccordion(id)}> 
        <p className="accordion-question">{question}</p>
       <img src="/images/icon-arrow-down.svg" alt="arrow" className={`arrow ${addReverseClass}`}/>
        </div>
          {showAnswer}
        </>
    )
};

export default Accordion
 