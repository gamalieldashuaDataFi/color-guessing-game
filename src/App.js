import React, { useEffect, useState } from 'react';
import './App.css';
import { QuestionCard } from './component/QuestionCard/QuestionCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import RoundCompleteModal from './component/RoundCompletedModal/RoundCompletedModal';

function App() {
  const [randRgbs, setRandRgbs] = useState([]);
  const [randAnswer, setRandAnswer] = useState('');
  const [shuffle, setShuffle] = useState(1);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('');
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');
  const [showIcons, setShowIcons] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const getRandomRgbColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const generateUniqueRgbColors = count => {
    const uniqueColors = new Set();

    while (uniqueColors.size < count) {
      uniqueColors.add(getRandomRgbColor());
    }

    return Array.from(uniqueColors);
  };

  useEffect(() => {
    const uniqueRgbColors = generateUniqueRgbColors(6);
    setRandRgbs(uniqueRgbColors);
  }, [shuffle]);

  useEffect(() => {
    const randIndex = Math.floor(Math.random() * 6);
    setRandAnswer(randRgbs[randIndex]);
  }, [randRgbs, shuffle]);

  const onclickHandler = selectedColor => {
    setSelectedColor(selectedColor);
    setShowIcons(true);

    if (selectedColor === randAnswer) {
      setMessage('Correct!');
      setScore(prev => ++prev);
    } else {
      setMessage('Wrong!');
    }

    setTimeout(() => {
      setShowIcons(false);
      setMessage('');
      if (shuffle === 20) {
        setShowModal(true);
      } else {
        setShuffle(prev => ++prev);
      }
    }, 900);
  };

  const newGameOnclickHandler = () => {
    setShuffle(1);
    setScore(0);
    setIsSpinning(true);
    setShowModal(false);
    setTimeout(() => setIsSpinning(false), 1000);
  };

  return (
    <div className="App">
      <header className="App-header">
        <QuestionCard
          shuffle={shuffle}
          randAnswer={randAnswer}
          onclickHandler={onclickHandler}
          randRgbs={randRgbs}
          newGameOnclickHandler={newGameOnclickHandler}
          score={score}
          message={message}
          isSpinning={isSpinning}
          selectedColor={selectedColor}
          showIcons={showIcons}
        />
        <RoundCompleteModal
          show={showModal}
          onHide={() => setShowModal(false)}
          onNewGame={newGameOnclickHandler}
          score={score}
        />
      </header>
    </div>
  );
}

export default App;
