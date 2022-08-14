import { useContext, useEffect, useState } from "react";
import { IAnswers } from "../../data/questions";
import { Container } from "./styles";
import { theme } from "../../theme";
import { AppContext } from "../../contexts/AppContext";

interface IAnswerProps {
  data: IAnswers;
  changeScore: (isCorrect: boolean, amount: number) => void;
  toggleAnswer: () => void;
}

export const Answer = ({
  data,
  changeScore,
  toggleAnswer,
}: IAnswerProps) => {
  const [background, setBackground] = useState("");
  const { toggleLostModalVisible, toggleIsAnswerSelectedCorrect, isAnswered} =
    useContext(AppContext);
  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    if (isAnswered) {
      if (data.isCorrect) {
        setBackground(theme.colors.success);
      }
      toggleDisableButton();
    }else{
      setBackground(theme.colors.white)
      toggleDisableButton
    }
  }, [isAnswered]);

  const handleAnswer = () => {
    toggleAnswer();

    if (data.isCorrect) {
      changeScore(true, 1);
      toggleIsAnswerSelectedCorrect(true);
    } else {
      setBackground(theme.colors.danger);
      changeScore(false, 1);
      toggleIsAnswerSelectedCorrect(false);
      toggleLostModalVisible(true);
    }
  };

  const toggleDisableButton = () => {
    setDisableButton(!disableButton);
  };



  return (
    <Container
      disabled={disableButton}
      style={{
        backgroundColor: background,
        color:
          background == theme.colors.danger ||
          background == theme.colors.success
            ? theme.colors.white
            : theme.colors.primary,
      }}
      onClick={handleAnswer}
    >
      {data.label}
    </Container>
  );
};
