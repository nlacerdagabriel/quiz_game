export interface IQuestion {
  question: string;
  answers: IAnswers[];
}

export interface IAnswers {
  label: string;
  isCorrect: boolean;
}


export const questions: IQuestion[] = [
  {
    question: 'teste1',
    answers: [
      {
        label: 'primeira pergunta',
        isCorrect: false
      },
      {
        label: 'segunda pergunta',
        isCorrect: false
      },
      {
        label: 'terceira pergunta',
        isCorrect: true
      },
      {
        label: 'quarta pergunta',
        isCorrect: false
      },
    ]
  }
]