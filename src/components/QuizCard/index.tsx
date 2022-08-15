import { Button } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import { questions } from "../../data/questions";
import { Question } from "../Question";
import { Container, Title } from "./styles";

export const QuizCard = () => {
  const {
    changeScore,
    isAnswerSelectedCorrect,
    currentQuestion,
    handleCorrectAnswer,
    toggleIsAnswered,
    isAnswered
  } = useContext(AppContext);

  const toggleAnswer = () => {
    toggleIsAnswered(true)
  };

  const handleNextQuestion = () => {
    handleCorrectAnswer()
    toggleIsAnswered(false)
  }

  return (
    <Container>
      <Title>Selecione a opção correta!</Title>

      <Question
        toggleAnswer={toggleAnswer}
        changeScore={changeScore}
        data={currentQuestion}
      />

      {isAnswered && isAnswerSelectedCorrect && (
        <div
          style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        >
          <Button
            onClick={handleNextQuestion}
            colorScheme="primary"
            size="lg"
            variant="outline"
          >
            Next question
          </Button>
        </div>
      )}
    </Container>
  );
};
