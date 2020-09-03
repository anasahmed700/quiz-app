import React from 'react'

// defining properties with types 
type Props = {
  question: string;
  answers: string[];
  userAnswer: any;
  questionNum: number;
  totalQuestions: number;
  callback: any;
}

export const QuestionCard: React.FC<Props> = ({question, answers, userAnswer, questionNum, totalQuestions, callback}) => {
  return (
    <div>
      <p>Question: {questionNum} / {totalQuestions}</p>
      <p dangerouslySetInnerHTML={{__html: question}} />
      {answers.map(answer => (
        <div>
          <button disabled={userAnswer} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{__html: answer}} />
          </button>
        </div>
      ))}
    </div>
  )
}
