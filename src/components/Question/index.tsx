import { IAnswers, IQuestion } from "../../data/questions";
import { Answer } from "../Answer";
import { Container, Title } from "./styles";


interface IQuestionProps {
  data: IQuestion;
  changeScore: (isCorrect: boolean, amount: number) => void;
  isAnswered: boolean;
  toggleAnswer: () => void;
}

export const Question = ({changeScore, data, isAnswered, toggleAnswer}:IQuestionProps) => {
  return (
    <Container>
      <Title>{data.question}</Title>

      {data.answers.map((item, index) => (
        <Answer
          key={index}
          data={item}
          isAnswered={isAnswered}
          toggleAnswer={toggleAnswer}
          changeScore={changeScore}
        />
      ))}
    </Container>
  );
};
