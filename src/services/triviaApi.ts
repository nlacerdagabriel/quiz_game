import axios from 'axios'
import { shuffleArray } from './suffleArray'


export const getQuestion = async () => {
  let response = await axios.get('https://the-trivia-api.com/api/questions?limit=1')
  let data = response.data[0]

  let incorrectAnswers = data.incorrectAnswers.map((it: string) => {
    return {
      label: it,
      isCorrect: false
    }
  })

  let allAnswersRandomized = shuffleArray([
    {
      label: data.correctAnswer,
      isCorrect: true
    },
    ...incorrectAnswers
  ])


  let question = {
    question: data.question,
    answers: allAnswersRandomized
  }

  return question

}