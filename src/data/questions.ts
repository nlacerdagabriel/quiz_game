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
    question: 'Quem descobriu o Brasil?',
    answers: [
      {
        label: 'Índios',
        isCorrect: false
      },
      {
        label: 'Joaquina Barbosa',
        isCorrect: false
      },
      {
        label: 'Pedro Alvares Cabral',
        isCorrect: true
      },
      {
        label: 'O Brasil não existe',
        isCorrect: false
      },
    ]
  },
  {
    question: 'Quem descobriu a Rússia?',
    answers: [
      {
        label: 'Putin',
        isCorrect: true
      },
      {
        label: 'Bolsonaro',
        isCorrect: false
      },
      {
        label: 'Tiririca',
        isCorrect: false
      },
      {
        label: 'Ninguém ainda',
        isCorrect: false
      },
    ]
  }
]