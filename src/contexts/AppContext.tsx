import React, { createContext, useCallback, useEffect, useState } from "react";
import { IQuestion, questions } from "../data/questions";
import { getQuestion } from "../services/triviaApi";

interface IProps {
  children: React.ReactNode;
}

interface IAppContextProps {
  score: number;
  changeScore: (isCorrect: boolean) => void;
  isModalLostVisible: boolean;
  toggleLostModalVisible: (toggle: boolean) => void;
  isModalWinVisible: boolean;
  toggleWinModalVisible: (toggle: boolean) => void;
  isAnswerSelectedCorrect: boolean;
  toggleIsAnswerSelectedCorrect: (isCorrect: boolean) => void;
  restartQuiz: () => void;
  currentQuestion: any;
  handleCorrectAnswer: () => void;
  isAnswered: boolean;
  toggleIsAnswered: (toggle: boolean) => void;
}

export const AppContext = createContext<IAppContextProps>(
  {} as IAppContextProps
);

export const AppProvider: React.FC<IProps> = ({ children }) => {
  const [score, setScore] = useState(0);

  const [isModalLostVisible, setIsModalLostVisible] = useState(false);
  const [isModalWinVisible, setIsModalWinVisible] = useState(false);

  const [isAnswerSelectedCorrect, setIsAnswerSelectedCorrect] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      const response = await getQuestion();
      setCurrentQuestion(response);
    };

    loadData();
  }, []);

  const toggleIsAnswered = useCallback((toggle: boolean) => {
    if (toggle) {
      setIsAnswered(true);
    } else {
      setIsAnswered(false);
    }
  }, []);

  const toggleLostModalVisible = useCallback((toggle: boolean) => {
    setIsModalLostVisible(toggle);
  }, []);

  const toggleWinModalVisible = useCallback((toggle: boolean) => {
    setIsModalWinVisible(toggle);
  }, []);

  const changeScore = useCallback((isCorrect: boolean) => {
    isCorrect ? setScore((prev) => prev + 1) : setScore((prev) => prev - 1);
  }, []);

  const restartQuiz = useCallback(async () => {
    setScore(0);
    setIsAnswered(false);

    const response = await getQuestion();

    setCurrentQuestion(response);
  }, []);

  const handleCorrectAnswer = async () => {

    const response = await getQuestion();

    setCurrentQuestion(response);
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
        currentQuestion,
        handleCorrectAnswer,
        isAnswered,
        toggleIsAnswered,
        isModalWinVisible,
        toggleWinModalVisible,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
