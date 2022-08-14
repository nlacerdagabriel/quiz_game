import React, { createContext, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

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
}

export const AppContext = createContext<IAppContextProps>(
  {} as IAppContextProps
);

export const AppProvider: React.FC<IProps> = ({ children }) => {
  const [score, setScore] = useState(0);
  const [isModalLostVisible, setIsModalLostVisible] = useState(false);
  const [isAnswerSelectedCorrect, setisAnswerSelectedCorrect] = useState(false);

  const toggleLostModalVisible = useCallback((toggle: boolean) => {
    setIsModalLostVisible(toggle);
  }, []);

  const changeScore = useCallback((isCorrect: boolean) => {
    isCorrect ? setScore((prev) => prev + 1) : setScore((prev) => prev - 1);
  }, []);

  const restartQuiz = useCallback(() => {
    setScore(0);
  }, []);

  const toggleIsAnswerSelectedCorrect = useCallback((isCorrect: boolean) => {
    if (isCorrect) {
      setisAnswerSelectedCorrect(true);
    } else {
      setisAnswerSelectedCorrect(false);
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
