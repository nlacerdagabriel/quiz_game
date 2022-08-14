import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Container, Title } from "./styles";

export const CardHome = () => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate("/quiz");
  };

  return (
    <Container>
      <Title>Click the button below to get started!</Title>

      <Button
        onClick={handleStartQuiz}
        w="100%"
        colorScheme="primary"
        size="lg"
        variant="outline"
      >
        Get started
      </Button>
    </Container>
  );
};
