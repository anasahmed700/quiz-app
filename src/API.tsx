import { shuffleArray } from "./utils";

export const fetchQuestion = async (amount: number, difficulty: Difficulty) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
  const data = await (await fetch(endpoint)).json()
  console.log(data);
  return data.results.map((question: Question) => (
    {
      ...question,
      answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
    }
  ))
};

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard"
};
// defining types of fetched data 
export type Question = {
  categoty: string;
  correct_answer: string;
  incorrect_answers: string[];
  difficulty: string;
  question: string;
  type: string;
};

export type QuestionState = Question & { answers: string[] };