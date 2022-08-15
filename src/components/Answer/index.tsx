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

export const Answer = ({ data, toggleAnswer }: IAnswerProps) => {
  const [background, setBackground] = useState("");
  const { toggleLostModalVisible, toggleIsAnswerSelectedCorrect, isAnswered, changeScore } =
    useContext(AppContext);
  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    if (isAnswered) {
      if (data.isCorrect) {
        setBackground(theme.colors.success);
      }
      toggleDisableButton(true);
    } else {
      setBackground(theme.colors.white);
      toggleDisableButton(false);
    }
  }, [isAnswered]);

  const handleAnswer = () => {
    toggleAnswer();

    if (data.isCorrect) {
      toggleIsAnswerSelectedCorrect(true);
      changeScore(true)
    } else {
      setBackground(theme.colors.danger);
      toggleIsAnswerSelectedCorrect(false);
      toggleLostModalVisible(true);
    }
  };

  const toggleDisableButton = (toggle: boolean) => {
    if (toggle) {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
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
