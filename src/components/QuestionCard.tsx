import React from 'react'
import { Wrapper, ButtonWrapper } from './QuestionCard.styles'

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
    <Wrapper>
      <p>Question: {questionNum} / {totalQuestions}</p>
      <p dangerouslySetInnerHTML={{__html: question}} />
      {answers.map(answer => (
        <ButtonWrapper
          correct = {userAnswer?.correctAnswer === answer}
          userClicked = {userAnswer?.answer === answer}
        >
          <button disabled={userAnswer} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{__html: answer}} />
          </button>
        </ButtonWrapper>
      ))}
    </Wrapper>
  )
}
