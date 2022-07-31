import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

  const [currentQuestion,setCurrentQuestion] = useState(0)
  const [currentScore, setCurrentScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
//   const [timer, setTimer] = useState('00:00:00')

//   const getTimeRemaining = (e) =>{
// 	const total = Date.parse(e) - Date.parse(new Date());
// 	const seconds = Math.floor((total / 1000) % 60);
// 	const minutes = Math.floor((total / 1000 / 60) %60);
// 	const hours = Math.floor((total / 1000 / 60 / 60) %24);
// 	return {
// 		total, hours, minutes, seconds
// 	};
//   }

//   const startTimer = (e) =>{
// 	let {total, hours, minutes, seconds }
// 				= getTimeRemaining(e);
// 	if(total >=0){
// 		setTimer(
// 			(hours > 9 ? hours : '0' + hours) + ':' +
// 			(minutes > 9 ? minutes : '0' + minutes) + ':' +
// 			(seconds > 9 ? seconds : '0' + seconds) + ':' 
// 		)

// 	}
			
//   }


  const handleButtonClick = (isCorrect) => {
    if(isCorrect === true){
      const newScore = currentScore + 1;
      setCurrentScore(newScore);
    }
    const nextQuestion = currentQuestion + 1;
    if(nextQuestion < questions.length) setCurrentQuestion(nextQuestion);
    else setShowScore(true);
  }

  const handleResetButtonClick = () => {
	setCurrentQuestion(0);
	setCurrentScore(0);
	setShowScore(false);
  }

	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					{`You scored ${currentScore} out of ${questions.length}`}
					
					<button onClick={() => handleResetButtonClick()}>Re take quiz</button>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>{`Question ${currentQuestion + 1}`}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
						<div className='correct-answer-count'>
							<span>{`Correct Answer: ${currentScore}`}</span>
						</div>
						<div className='timer'>
							<span>{`Time: ${currentScore}`}</span>
						</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
              			<button key={answerOption.answerText} onClick={() => handleButtonClick(answerOption.isCorrect)}>
							{answerOption.answerText}
						</button>
            ))}
					</div>
				</>
			)}
		</div>
	);
}