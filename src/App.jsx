import { useState } from 'react';
import './App.css';
import { faqData } from './faqData';

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

function FaqList({ faq, iconPlus, iconMinus }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = idx => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <ul className="accordion__list">
      {faq.map((item, idx) => (
        <li className="accordion__list-item" key={item.id}>
          <details
            className="accordion__details"
            open={openIndex === idx}
            onClick={e => {
              e.preventDefault();
              handleToggle(idx);
            }}>
            <summary className="accordion__question-wrapper">
              <p className="accordion__question text-preset-2">
                {item.question}
              </p>
              <img
                className="accordion__icon"
                src={openIndex === idx ? iconMinus : iconPlus}
                width={30}
                height={31}
                alt=""
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
      <main>
        <BackgroundImage />
        <div className="container">
          <div className="accordion">
            <Header />
            <FaqList faq={faqData} iconPlus={iconPlus} iconMinus={iconMinus} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
