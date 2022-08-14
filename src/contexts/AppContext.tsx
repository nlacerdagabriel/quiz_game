import React, { createContext, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IQuestion, questions } from "../data/questions";

interface IProps {
  children: React.ReactNode;
}

interface IAppContextProps {
  score: number;
  changeScore: (isCorrect: boolean) => void;
  isModalLostVisible: boolean;
  toggleLostModalVisible: (toggle: boolean) => void;
  isAnswerSelectedCorrect: boolean;
  toggleIsAnswerSelectedCorrect: (isCorrect: boolean) => void;
  restartQuiz: () => void;
  questionsList: IQuestion[];
  currentQuestion: IQuestion;
  handleCorrectAnswer: () => void;
  isAnswered: boolean;
  toggleIsAnswered: () => void;
}

export const AppContext = createContext<IAppContextProps>(
  {} as IAppContextProps
);

export const AppProvider: React.FC<IProps> = ({ children }) => {
  const [score, setScore] = useState(0);
  const [isModalLostVisible, setIsModalLostVisible] = useState(false);
  const [isAnswerSelectedCorrect, setIsAnswerSelectedCorrect] = useState(false);
  const [questionsList, setQuestionsList] = useState(questions);
  const [currentQuestion, setCurrentQuestion] = useState(questionsList[0]);
  const [isAnswered, setIsAnswered] = useState(false);

  const toggleIsAnswered = useCallback(() => {
    setIsAnswered(!isAnswered)
  }, [])

  const toggleLostModalVisible = useCallback((toggle: boolean) => {
    setIsModalLostVisible(toggle);
  }, []);

  const changeScore = useCallback((isCorrect: boolean) => {
    isCorrect ? setScore((prev) => prev + 1) : setScore((prev) => prev - 1);
  }, []);

  const restartQuiz = useCallback(() => {
    setScore(0);
  }, []);

  const handleCorrectAnswer = () => {
    if (isAnswerSelectedCorrect) {
      let newList: IQuestion[] = [];


      questions.filter((it) => {
        if (it.question !== currentQuestion.question) {
          newList.push(it)
        }
      });

      setQuestionsList([...newList])
      setCurrentQuestion(questionsList[0])
    }
  };

  const toggleIsAnswerSelectedCorrect = useCallback((isCorrect: boolean) => {
    if (isCorrect) {
      setIsAnswerSelectedCorrect(true);
    } else {
      setIsAnswerSelectedCorrect(false);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        score,
        changeScore,
        isModalLostVisible,
        toggleLostModalVisible,
        isAnswerSelectedCorrect,
        toggleIsAnswerSelectedCorrect,
        restartQuiz,
        questionsList,
        currentQuestion,
        handleCorrectAnswer,
        isAnswered,
        toggleIsAnswered
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
