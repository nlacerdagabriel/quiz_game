import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useControllableState,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import { theme } from "../../theme";
import { useNavigate } from "react-router-dom";

export const ModalWin = () => {
  const { score, isModalWinVisible, restartQuiz, toggleWinModalVisible } =
    useContext(AppContext);

  const [value, setValue] = useState(isModalWinVisible);
  const navigate = useNavigate();

  const [internalValue, setInternalValue] = useControllableState({
    value,
    onChange: setValue,
  });

  useEffect(() => {
    if (isModalWinVisible) {
      setInternalValue(!value);
    }

  }, [isModalWinVisible]);

  const onRestart = () => {
    toggleWinModalVisible(false);
    navigate("/");
    restartQuiz();
    setInternalValue(false);
  };

  return (
    <>
      <Modal isCentered isOpen={internalValue} onClose={() => {}}>
        {
          <ModalOverlay
            bg="blackAlpha.300"
            backdropFilter="blur(10px) hue-rotate(90deg)"
          />
        }
        <ModalContent>
          <ModalHeader>You're the winner!!!</ModalHeader>
          <ModalBody>
            <Text>Your score: {score}</Text>
          </ModalBody>
          <ModalFooter>
            <Button
              backgroundColor={theme.colors.success}
              color={theme.colors.white}
              onClick={onRestart}
            >
              Play again
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
