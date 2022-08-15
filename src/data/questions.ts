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
  },
  {
    question: 'Quantos lanches Isabelly consegue comer?',
    answers: [
      {
        label: '1',
        isCorrect: false
      },
      {
        label: '3',
        isCorrect: false
      },
      {
        label: '10',
        isCorrect: false
      },
      {
        label: 'Todos',
        isCorrect: true
      },
    ]
  },
  {
    question: 'Qual a melhor WINX?',
    answers: [
      {
        label: 'Bloom',
        isCorrect: false
      },
      {
        label: 'Stella',
        isCorrect: true
      },
      {
        label: 'Flora',
        isCorrect: false
      },
      {
        label: 'Aisha',
        isCorrect: false
      },
    ]
  },
  {
    question: 'Por que o jacaré não come alface?',
    answers: [
      {
        label: 'Motivos fisiológicos',
        isCorrect: false
      },
      {
        label: 'Não sei',
        isCorrect: false
      },
      {
        label: 'Porque ele não gosta',
        isCorrect: false
      },
      {
        label: 'Pelo mesmo motivo de um ET não saber português',
        isCorrect: true
      },
    ]
  }
]