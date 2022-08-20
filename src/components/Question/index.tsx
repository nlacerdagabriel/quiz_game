import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { IAnswers, IQuestion } from "../../data/questions";
import { Answer } from "../Answer";
import { Container, Title } from "./styles";

interface IQuestionProps {
  data: IQuestion;
  changeScore: (isCorrect: boolean, amount: number) => void;
  toggleAnswer: () => void;
}

export const Question = ({
  changeScore,
  data,
  toggleAnswer,
}: IQuestionProps) => {
  return (
    <Container>
      <Title>{data.question && data.question}</Title>

      {data.answers &&
        data.answers.map((item, index) => (
          <Answer
            key={index}
            data={item}
            toggleAnswer={toggleAnswer}
            changeScore={changeScore}
          />
        ))}
    </Container>
  );
};
