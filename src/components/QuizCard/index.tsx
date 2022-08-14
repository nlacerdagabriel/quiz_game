import { Button } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import { questions } from "../../data/questions";
import { Question } from "../Question";
import { Container, Title } from "./styles";

export const QuizCard = () => {
  const { changeScore, isAnswerSelectedCorrect } = useContext(AppContext);
  const [isAnswered, setIsAnswered] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);

  const toggleAnswer = () => {
    setIsAnswered(true);
  };

  useEffect(() => {
    console.log(currentQuestion.answers);
  }, []);

  return (
    <Container>
      <Title>Selecione a opção correta!</Title>

      <Question
        toggleAnswer={toggleAnswer}
        changeScore={changeScore}
        data={currentQuestion}
        isAnswered={isAnswered}
      />

      {isAnswered && isAnswerSelectedCorrect && (
        <div
          style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        >
          <Button colorScheme="primary" size="lg" variant="outline">
            Next question
          </Button>
        </div>
      )}
    </Container>
  );
};
