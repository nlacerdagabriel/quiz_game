import { ModalLost } from "../../components/ModalLost";
import { ModalWin } from "../../components/ModalWin";
import { QuizCard } from "../../components/QuizCard";

export const QuizPage = () => {
  return (
    <>
      <ModalLost />
      <ModalWin />
      <QuizCard />
    </>
  );
};
