import './App.css';
import { faqData } from './faqData';
import { icons } from './faqData';
import bgPattern from './assets/background-pattern-mobile.svg';
import iconMinus from './assets/icon-minus.svg';
import iconPlus from './assets/icon-plus.svg';
import iconStar from './assets/icon-star.svg';

function Header() {
  return (
    <div className="accordion__header">
      <img src={iconStar} width={40} height={41} alt="star icon" />
      <h1 className="accordion__headline text-preset-1">FAQs</h1>
    </div>
  );
}

function FaqList({ faq, icons }) {
  console.log(icons.plus);

  return (
    <ul className="accordion__list">
      {faq.map(item => (
        <li className="accordion__list-item" key={item.id}>
          <details className="accordion__details">
            <summary className="accordion__question-wrapper">
              <p className="accordion__question text-preset-2">
                {item.question}
              </p>
              <img
                className="accordion__icon-plus"
                src={iconPlus}
                width={30}
                height={31}
                alt="Plus icon"
              />
            </summary>
            <p className="accordion__answer text-preset-3">{item.answer}</p>
          </details>
        </li>
      ))}
    </ul>
  );
}

function BackgroundImage() {
  return <div className="accordion__bg-container"></div>;
}

function App() {
  return (
    <>
      <BackgroundImage />

      <div className="container">
        <div className="accordion">
          <Header />
          <FaqList faq={faqData} icons={icons} />
        </div>
      </div>
    </>
  );
}

export default App;
